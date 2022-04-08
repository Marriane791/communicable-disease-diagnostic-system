from fastapi import APIRouter,Body,Request,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from routes.chat.model_chat import ChatSchema

router = APIRouter()

@router.post("/chat",response_description="connect with other doctors")
async def chat(request:Request,chat:ChatSchema = Body(...)):
    chat = jsonable_encoder(chat)
    new_text = await request.app.collection["chat"].insert_one(chat)
    ins_chat = await request.app.collection["chat"].find_one(
        {"_id":new_text.inserted_id}
    )
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=ins_chat)

@router.get("/all_chats",response_description="list all chats")
async def list_all_chats(request:Request):
    chats = []
    for chat in await request.app.collection["chat"].find().to_list(length=100):
        chats.append(chat)
    return chats


