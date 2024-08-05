import { createPool } from "mysql2/promise";
//import dotenv from 'dotenv';

//dotenv.config();

export const pool = createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "3129",
    database: "ecommercedbpruebav2",
});

pool.getConnection((error, connection) => {
    if (error) throw error;
    console.log('Conectada correctamente', connection.threadId);
});
