import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Password55$",
    database: "crixus"
});

export default pool;

