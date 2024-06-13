const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { findUserByUsername, createUser } = require('../models/userModel');
dotenv.config();

const register = async (req, res) => {
    const { username, password, email, role } = req.body;

    const existingUser = await findUserByUsername(username);
    if (existingUser) return res.status(400).json({ message: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser(username, hashedPassword, email, role);

    res.status(201).json({ userId });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { register, login };
