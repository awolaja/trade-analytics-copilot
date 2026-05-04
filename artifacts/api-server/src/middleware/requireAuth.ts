import { type Request, type Response, type NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.username) {
    res.status(401).json({ error: "unauthenticated", message: "Authentication required" });
    return;
  }
  next();
}
