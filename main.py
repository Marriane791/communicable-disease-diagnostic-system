from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from decouple import config
  
from routes.users import router as user_router

# initialise fastapi
app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

MONGO_DETAILS = config("MONGODB_URL")


# Db connectivity

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient('MONGO_DETAILS')
    app.mongodb = app.mongodb_client[config("DB_NAME")]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

# Routes
@app.get("/")
def pong():
    return {"ping":"pong!"}


app.include_router(user_router, tags=["users"], prefix="/user" )



