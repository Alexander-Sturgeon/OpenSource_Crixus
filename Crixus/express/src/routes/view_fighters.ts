import { Router, Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import pool from "../db";

const router = Router();

//Gets max id fighter
router.get("/fighters/total", async (_req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT COALESCE(MAX(fighter_id), 0) AS maxId FROM fighter");
    res.json(rows);
});

//Gets all the fighter for the user with a specific userID

router.get("/users/:userId/fighters", async (req: Request, res: Response) => {
    const user_id = Number(req.params.userId);
    if (isNaN(user_id)) {
        return res.status(400).json({ message: "Invalid User ID" })
    }

    try {
        const [result] = await pool.query(`  SELECT f.fighter_id AS fighterId, f.first_name,f.last_name, f.appearance,f.strength,f.dexterity,f.constitution,f.intelligence,f.salary,
            w.weapon_id,
            w.name AS weapon_name,
            w.appearance AS weapon_appearance,
            w.damage AS weapon_damage,
            w.type AS weapon_type,
            w.price AS weapon_price,
            w.rarity AS weapon_rarity,
            a.armour_id,
            a.name AS armour_name,
            a.appearance AS armour_appearance,
            a.damage_protection AS armour_damage_protection,
            a.type AS armour_type,
            a.price AS armour_price,
            a.rarity AS armour_rarity
            FROM fighter f
            INNER JOIN weapon w ON f.Weapons_weapon_id = w.weapon_id
            INNER JOIN armour a ON f.Armour_armour_id = a.armour_id
            WHERE f.User_user_id = ? `,
            [user_id]);
        const shaped = (result as any[]).map((row) =>({
            fighterId: row.fighterId,
            first_name: row.first_name,
            last_name: row.last_name,
            appearance: row.appearance,
            strength: row.strength,
            dexterity: row.dexterity,
            constitution: row.constitution,
            intelligence: row.intelligence,
            salary: row.salary,
            weaponId: {
                weapon_id: row.weapon_id,
                name: row.weapon_name,
                appearance: row.weapon_appearance,
                damage: row.weapon_damage,
                type: row.weapon_type,
                price: row.weapon_price,
                rarity: row.weapon_rarity
            },
            armourId: {
                armourId: row.armour_id,
                name: row.armour_name,
                appearance: row.armour_appearance,
                damage_protection: row.armour_damage_protection,
                type: row.armour_type,
                price: row.armour_price,
                rarity: row.armour_rarity
            }
        }))



        res.status(200).json(shaped);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Database Error" })
    }
})

router.delete("/fighters/:fighterId", async (req: Request, res: Response) => {
    const fighter_id = Number(req.params.fighterId);
    if (isNaN(fighter_id)) {
        return res.status(400).json({ message: "Invalid Fighter ID" })
    }

    try {
        const [result] = await pool.query<ResultSetHeader>("DELETE FROM fighter WHERE fighter_id = ?",
            [fighter_id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Fighter Not Found" })
        }

        return res.status(200).json({ message: "Fighter Successfully Deleted" })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: "Database Error" })
    }


})

export default router;