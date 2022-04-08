from fastapi import APIRouter,Body,HTTPException,Request,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from model import UserSchema,UpdateUserModel

router = APIRouter()

# Takes the response and converts it into a python object and insert it into collection
# mongo will inturn return a response as inserted id we thus return that to python as existing user
@router.post("/create/user",response_description="Create new user")
async def create_user(request:Request,user:UserSchema = Body(...)):
    user = jsonable_encoder(user)
    new_user = await request.app.collection["users"].insert_one(user)
    existing_user = await request.app.collection["users"].find_one(
        {"_id": new_user.inserted_id}
    )

    return JSONResponse(status_code=status.HTTP_201_CREATED, content=existing_user)

@router.get("/all",response_description="list all users")
async def list_all_users(request:Request):
    users = []
    for user in await request.app.collection["users"].find().to_list(length=100):
        users.append(user)
    return users

@router.get("/{id}",response_description="Fetch a sinle user")
async def fetch_one_user(id:str,request:Request):
    if (user:= await request.app.collection["users"].find_one({"_id":id})) is not None:
        return user
    raise HTTPException(status_code=404, detail=f"User{id} not found")

@router.put("/update/{id}",response_description="Update user details")
async def update_user(id:str,request:Request,user_updated:UpdateUserModel = Body(...)):
    user_updated = {k: v for k,v in user_updated.dict().items() if v is not None}

    if len(user_updated) >= 1:
        new_details = await request.app.collection["users"].update_one(
            {"_id":id},{"$set":user_updated}
        )

        if new_details.modified_count == 1:
            if (
                final := await request.app.collection["users"].find_one({"_id":id})
            ) is not None:
                return final
        
    raise HTTPException(status_code=404, detail=f"User {id} not found")

@router.delete("/delete/{id}",response_description="Revoke user")
async def delete_user(id:str, request:Request):
    delete_result = await request.app.collection["users"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=404, detail=f"Task {id} not found")