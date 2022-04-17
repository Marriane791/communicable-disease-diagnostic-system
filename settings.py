from pydantic import BaseModel, BaseSettings

# MongoDB attributes
class ServerSettings(BaseSettings): 
    mongodb_uri:str = ''
    database:str = '',
    port:int = 8000



class Settings(ServerSettings):
    pass


settings = Settings()