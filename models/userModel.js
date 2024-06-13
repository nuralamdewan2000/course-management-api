const db = require('../config/db');

const findUserByUsername = async (username) => {
    const [rows] = await db.query('SELECT * FROM Users WHERE username = ?', [username]);
    return rows[0];
};

const createUser = async (username, password, email, role) => {
    const [result] = await db.query('INSERT INTO Users (username, password, email, role) VALUES (?, ?, ?, ?)', [username, password, email, role]);
    return result.insertId;
};

module.exports = { findUserByUsername, createUser };
 