import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Mathwhiz12!!!!",
    database: "crixus"
});

export default pool;

