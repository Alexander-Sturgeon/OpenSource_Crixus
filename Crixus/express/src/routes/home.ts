import {Router, Request, Response} from "express";

import pool from "../db";

const router = Router();


//Gets 3 pieces of armor at random for the home page so it is different everytime you go to the home page.
router.get("api/armor/home"), async(_req: Request, res: Response) => {
    const [threeRows] = await pool.query("SELECT * FROM armour ORDER BY RAND() LIMIT 3") ;
    res.json(threeRows);
}

export default router;