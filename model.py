from typing import Optional
from pydantic  import BaseModel,EmailStr,Field
import uuid

# class PredictionSchema(BaseModel):
#     disease: Field(...)
#     symptoms : str = Field(...)

#     class Config:
#         schema_extra = {
#             "example" : {
#                 "disease" : "malaria",
#                 "symptoms" : "fever and flu-like illness, including shaking chills, headache, muscle aches, and tiredness"
#             }
#         }
class UserSchema(BaseModel):
     id: str = Field(default_factory=uuid.uuid4, alias="_id")
     role: str = Field(...)
     fullname: str = Field(...)
     email: EmailStr = Field(...)
     password: str = Field(...)

     class Config:
        schema_extra = {
            "example": {
                "id": "123",
                "role": "head-doctor/doctor/admin",
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "password": "doe-123!"
            }
        }
class UpdateUserModel (BaseModel):
    role: Optional[str]
    fullname: Optional[str]
    email:   Optional[str]
    password: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "role": "head-doctor/doctor/admin",
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "password":"doe-123!"
            }
        }
class ChatSchema(BaseModel):
    message  :str = Field(...)
    timestamp:str = Field(...)
    user:str = Field(...)
    userImages:str = Field(...)

    class Config:
        schema_extra = {
             "message"  :"which disease had shortness of breath?",
             "timestamp":"30/03/2003 18/;30PM",
             "user":"marrie",
             "userImages":"image url",
        }
def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}
            
        
    
