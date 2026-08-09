import { Router,Request, Response } from "express";
import pool from "../../db";
import bcrypt from "bcrypt"
import { ResultSetHeader } from "mysql2/promise";
import { RegisterBody } from "./authTypes";


const router = Router()

router.post("/", async (req:Request, res: Response) =>{
    const {username,password, confirmPassword, firstName, lastName, email, birthDate, teamLabel}: RegisterBody = req.body;

    if(!username || !password || !confirmPassword || !firstName || !teamLabel){
        return res.status(400).json({error: "Missing Required Fields. "})
    }

    if(password !== confirmPassword){
        return res.status(400).json({error: "Passwords do not match"})
    }

    if(password.length < 8 || password.length > 50){
        return res.status(400).json({error: "password must be between 8 and  characters"})
    }


    const hashPassword = await bcrypt.hash(password,10);
    const connection = await pool.getConnection();

    try{
        await connection.beginTransaction();

        const [teamResult] = await connection.query<ResultSetHeader>(`INSERT INTO Team (team_label) VALUES (?)`, [teamLabel]);
        const teamId = teamResult.insertId;

        await connection.query<ResultSetHeader>(
            `INSERT INTO User (first_name, last_name, password, email, birth_date, username, Team_team_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
             [firstName, lastName ?? null, hashPassword, email ?? null, birthDate ?? null, username, teamId]
        );

        await connection.commit();
        res.status(201).json({message: "Registered Successfully"})

    }

    catch(err){
        await connection.rollback();
        console.error("Registration failed", err)
        res.status(500).json({error: "Registration failed"})
    }
    finally{
        connection.release();
    }

});

export default router;