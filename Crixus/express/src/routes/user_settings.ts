import {Router, Request, Response} from "express";

import pool from "../db";

const router = Router();

//gets user table
router.get("/", async(_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM user");

    res.json(rows);
});

export default router;