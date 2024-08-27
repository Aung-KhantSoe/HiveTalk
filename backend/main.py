from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import requests

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PRIVATE_KEY = "bce95c1f-da7f-4589-b898-7fc5c1a67f11"

class User(BaseModel):
    username: str

@app.post('/authenticate')
async def authenticate(user: User):
    response = requests.put('https://api.chatengine.io/users/',
        json={
            "username": user.username,
            "secret": user.username,
            "first_name": user.username,
        },
        headers={ "Private-Key": PRIVATE_KEY }
    )
    
    if response.status_code != 201:  # 201 is the typical status code for a successful creation
        raise HTTPException(status_code=response.status_code, detail=response.json())
    
    return response.json()
