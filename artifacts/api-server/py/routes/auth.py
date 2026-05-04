from fastapi import APIRouter, Request, HTTPException
from schemas import LoginRequest, UserResponse

router = APIRouter()

USERS: dict[str, dict] = {
    "yemi": {
        "password": "yemi",
        "displayName": "Yemi Trader",
        "avatarInitials": "YT",
    }
}


@router.post("/auth/login", response_model=UserResponse)
def login(body: LoginRequest, request: Request):
    user = USERS.get(body.username)
    if not user or user["password"] != body.password:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    request.session["username"] = body.username
    return UserResponse(
        username=body.username,
        displayName=user["displayName"],
        avatarInitials=user["avatarInitials"],
    )


@router.get("/auth/me", response_model=UserResponse)
def me(request: Request):
    username = request.session.get("username")
    if not username or username not in USERS:
        raise HTTPException(status_code=401, detail="Not authenticated")
    user = USERS[username]
    return UserResponse(
        username=username,
        displayName=user["displayName"],
        avatarInitials=user["avatarInitials"],
    )


@router.post("/auth/logout")
def logout(request: Request):
    request.session.clear()
    return {"success": True}
