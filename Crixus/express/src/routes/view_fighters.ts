import {Router, Request, Response} from "express";

import pool from "../db";

const router = Router();

//Gets all armour
router.get("/fighters/total", async(_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM Fighters ");
    res.json(rows);
});

export default router;