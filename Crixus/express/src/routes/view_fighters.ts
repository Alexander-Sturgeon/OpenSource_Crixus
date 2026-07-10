import {Router, Request, Response} from "express";
import pool from "../db";

const router = Router();

//Gets max id fighter
router.get("/fighters/total", async(_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT COALESCE(MAX(fighter_id), 0) AS maxId FROM fighter");
    res.json(rows);
});

export default router;