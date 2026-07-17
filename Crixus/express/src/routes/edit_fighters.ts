import {Router, Request, Response} from "express";
import pool from "../db";
import {ResultSetHeader} from "mysql2/promise";

const router = Router();router.put("")

router.put("/edit/:id", async(req: Request, res: Response) => {
    try{
        const {
            first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, weapon_id, user_id, team_id
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
             WHERE fighter_id = ?`,[first_name, last_name, appearance, strength, dexterity, constitution, intelligence, salary, weapon_id, user_id, team_id, fighter_id]
        );
        res.status(201).json({fighter_id: result.insertId})
    } catch(err){
        console.error("API FAILED to add fighter: ", err)
        res.status(500).json({error: "Failed to editFighter."})
    }
})

export default router;