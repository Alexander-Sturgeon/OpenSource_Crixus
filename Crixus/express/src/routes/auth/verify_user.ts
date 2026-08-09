import { Router, Request, Response } from "express";
import { requireAuth } from "../../middleware/middleware";
import pool from "../../db";

const router = Router();

router.get("/", requireAuth, async (req: Request, res: Response) => {
    const userId = (req as any).userId;

    const [rows]: any = await pool.query(
        `SELECT username FROM User WHERE user_id = ?`,
        [userId]
    );

    if (!rows.length) {
        return res.status(401).json({ error: "User not found" });
    }

    res.status(200).json({ userId, username: rows[0].username });
});

export default router;
