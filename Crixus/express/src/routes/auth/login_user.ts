import { Router, Request, Response } from "express";
import pool from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginBody, AuthTokenPayload } from "./authTypes";


const router = Router();

  router.post("/", async (req: Request, res: Response) => {
      const { username, password }: LoginBody = req.body;

      if (!username || !password) {
          return res.status(400).json({ error: "Missing required fields." });
      }

      try {
          const [rows]: any = await pool.query(
              `SELECT * FROM User WHERE username = ?`,
              [username]
          );

          let matchedUser = null;

          for (const row of rows) {
              const isMatch = await bcrypt.compare(password, row.password);
              if (isMatch) {
                  matchedUser = row;
                  break;
              }
          }

          if (!matchedUser) {
              return res.status(401).json({ error: "Invalid username or password" });
          }

          const payload: AuthTokenPayload = { userId: matchedUser.user_id };
          const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" });

          res.cookie("token", token, {
              httpOnly: true,
              secure: false,
              sameSite: "lax",
          });

          res.status(200).json({ message: "Login successful" });

      } catch (err) {
          console.error("Login failed", err);
          res.status(500).json({ error: "Login failed" });
      }
  });

  export default router;