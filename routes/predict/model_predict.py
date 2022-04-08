from pydantic  import BaseModel,Field
import uuid

class PredictionSchema(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    disease: str
    symptoms : str = Field(...)

    class Config:
        schema_extra = {
            "example" : {
                "disease" : "malaria",
                "symptoms" : "fever and flu-like illness,  shaking chills, headache, muscle aches, and tiredness"
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