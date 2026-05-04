from fastapi import Depends, HTTPException, Request
from typing import Annotated


def get_current_user(request: Request) -> str:
    username = request.session.get("username")
    if not username:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return username


CurrentUser = Annotated[str, Depends(get_current_user)]
