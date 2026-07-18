import {Router, Request, Response} from "express";
import pool from "../db";
import {ResultSetHeader} from "mysql2/promise";
import { RowDataPacket } from "mysql2/promise";

const router = Router()

router.put("/edit/:id", async(req: Request, res: Response) => {
    try{
        const {
            first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, Weapons_weapon_id, Armour_armour_id, User_user_id, Team_team_id
        } = req.body;
        const fighter_id = req.params.id;

        //Query values sepearted to avoid sqli attack 
        const [result] = await pool.query<ResultSetHeader>(
            `UPDATE Fighter 
             SET first_name = ?,
                 last_name = ?,
                 appearance = ?,
                 strength = ?,
                 dexterity = ?,
                 constitution = ?,
                 intelligence = ?,
                 salary = ?,
                 Weapons_weapon_id = ?,
                 Armour_armour_id = ?,
                 User_user_id = ?,
                 Team_team_id = ?
             WHERE fighter_id = ?`,[first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, Weapons_weapon_id, Armour_armour_id, User_user_id, Team_team_id, fighter_id]
        );
        res.status(200).json({fighter_id: fighter_id})
    } catch(err){
        console.error("API FAILED to edit fighter: ", err)
        res.status(500).json({error: "Failed to editFighter."})
    }
})

router.get("/get/:id", async(req: Request, res: Response) => {
    try{
        const fighter_id = req.params.id;
        const[rows] = await pool.query<RowDataPacket[]>(
            `SELECT * FROM fighter 
             WHERE fighter_id = ?`, [fighter_id]
        );
        res.status(200).json(rows[0])
    }catch(err){
        console.error("API FAILED to get fighter: ", err)
        res.status(500).json({error: "Failed to getFighter"})
    }
})

export default router;