import {Router, Request, Response} from "express";

import pool from "../db";

const router = Router();

//Gets all armour
router.get("/api/armor", async(_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT armour_id AS armourId, name, appearance, damage_protection, type, price, rarity FROM armour");
    res.json(rows);
});

//Gets all weapons
router.get("/api/weapon", async(_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM weapon");
    res.json(rows);
});
export default router;