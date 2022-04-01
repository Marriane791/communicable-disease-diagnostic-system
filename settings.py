from pydantic import BaseModel, BaseSettings

# MongoDB attributes
class ServerSettings(BaseSettings): 
    mongodb_uri:str = 'mongodb+srv://admin:<admin-123>@cluster0.pvpfy.mongodb.net/diagnostic-system?retryWrites=true&w=majority'
    database:str = 'diagnostic-system',
    port:int = 8000



class Settings(ServerSettings):
    pass


settings = Settings()