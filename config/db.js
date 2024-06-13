const mysql = require('mysql2');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true, 
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(process.env.DB_SSL_CA_PATH).toString()
    }
});

module.exports = pool.promise();
