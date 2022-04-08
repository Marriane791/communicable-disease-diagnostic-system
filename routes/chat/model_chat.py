from pydantic  import BaseModel,Field,HttpUrl
from datetime import time
import uuid



class ChatSchema(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    userImage:HttpUrl = Field(...)
    user:str = Field(...)
    timestamp:time = Field(...)
    message  :str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "id":"tyurt234ert",
                "userImage":"image url",
                "user":"marrie",
                "timestamp":"14:23:55.003",
                "message"  :"which disease had shortness of breath?",
            }
        }

    


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}