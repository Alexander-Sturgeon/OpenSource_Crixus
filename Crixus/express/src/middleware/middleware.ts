 import { Request, Response, NextFunction } from "express";
  import jwt from "jsonwebtoken";
  import { AuthTokenPayload } from "../routes/auth/authTypes";

  export function requireAuth(req: Request, res: Response, next: NextFunction) {
      const token = req.cookies?.token;

      if (!token) {
        return res.status(401).json({ error: "Not authenticated" });
    }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthTokenPayload;
        (req as any).userId = decoded.userId;
        next();
      }catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }
  }