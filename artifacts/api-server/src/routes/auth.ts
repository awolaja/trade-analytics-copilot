import { Router } from "express";
import { LoginBody } from "@workspace/api-zod";

const router = Router();

const USERS: Record<string, { password: string; displayName: string; avatarInitials: string }> = {
  yemi: {
    password: "yemi",
    displayName: "Yemi Trader",
    avatarInitials: "YT",
  },
};

router.post("/auth/login", (req, res) => {
  const parseResult = LoginBody.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: "invalid_body", message: "Invalid request body" });
    return;
  }

  const { username, password } = parseResult.data;
  const user = USERS[username];

  if (!user || user.password !== password) {
    res.status(401).json({ error: "invalid_credentials", message: "Invalid username or password" });
    return;
  }

  req.session.userId = username;
  req.session.username = username;

  res.json({
    username,
    displayName: user.displayName,
    avatarInitials: user.avatarInitials,
  });
});

router.get("/auth/me", (req, res) => {
  const username = req.session.username;
  if (!username) {
    res.status(401).json({ error: "unauthenticated", message: "Not authenticated" });
    return;
  }

  const user = USERS[username];
  if (!user) {
    res.status(401).json({ error: "unauthenticated", message: "User not found" });
    return;
  }

  res.json({
    username,
    displayName: user.displayName,
    avatarInitials: user.avatarInitials,
  });
});

router.post("/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      req.log.error({ err }, "Failed to destroy session");
    }
    res.json({ success: true });
  });
});

export default router;
