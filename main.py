from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import motor.motor_asyncio
from decouple import config
  
from routes.users import router as user_router
from routes.predict.predictions import router as predict_router
from routes.chat.chat import router as chat_router

# initialise fastapi
app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["GET"],
    allow_headers = ["Access-Control-Allow-Origin"],
)



# Db connectivity


MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.diagnose

app.collection = database.get_collection("health_system")


# Routes
@app.get("/")
def pong():
    return {"ping":"pong!"}


app.include_router(user_router, tags=["users"], prefix="/user" )
app.include_router(predict_router,tags=["predict"],prefix="/predict")
app.include_router(chat_router, tags=["chat"],prefix="/chat")



