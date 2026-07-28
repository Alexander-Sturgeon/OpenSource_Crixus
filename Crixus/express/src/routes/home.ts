import {Router, Request, Response} from "express";

import pool from "../db";

const router = Router();


//Gets 3 pieces of armor at random for the home page so it is different everytime you go to the home page.
router.get("/api/armor/home", async(_req: Request, res: Response) => {
    const [threeRows] = await pool.query("SELECT armour_id AS armourId, name, appearance, damage_protection, type, price, rarity FROM armour ORDER BY RAND() LIMIT 3") ;
    res.json(threeRows);
})

//Gets 3 pieces of weapons at random for the home page so it is different everytime you go to the home page.
router.get("/api/weapon/home", async(_req: Request, res: Response) => {
    const [threeRows] = await pool.query("SELECT * FROM weapon ORDER BY RAND() LIMIT 3") ;
    res.json(threeRows);
})

export default router;