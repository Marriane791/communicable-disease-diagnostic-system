from fastapi import APIRouter,Body,Request,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from routes.predict.model_predict import PredictionSchema

router = APIRouter()

@router.post("/predict",response_description="predict the disease")
async def make_predictions(request:Request,predict:PredictionSchema = Body(...)):
    predict = jsonable_encoder(predict)
    new_prediction = await request.app.collection["predict"].insert_one(predict)
    ins_prediction = await request.app.collection["predict"].find_one(
        {"_id":new_prediction.inserted_id}
    )
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=ins_prediction)

@router.get("/all",response_description="list all predictions")
async def list_all_predictions(request:Request):
    predictions = []
    for prediction in await request.app.collection["predict"].find().to_list(length=100):
        predictions.append(prediction)
    return predictions


@router.get("/{disease}",response_description="Fetch a list of a certain disease")
async def fetch_one_disease_type(disease:str,request:Request):
    diseases = []
    for disease in await request.app.collection["predict"].find().to_list(length=100):
        diseases.append(disease)
    return diseases
 