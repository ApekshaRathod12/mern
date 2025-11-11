const express = require('express');
const loginRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/loginModel');

// POST /login
loginRouter.post('/login', async (req, res) => {
    try {
        console.log(req);
        
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'username and password are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // compare password (assume hashed with bcrypt)
        const isMatch = password === user.password;
        console.log('isMatch',isMatch);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // create token if JWT secret present
        const secret = process.env.JWT_SECRET;
        let token = null;
        if (secret) {
            token = jwt.sign({ id: user._id, username: user.username }, secret, { expiresIn: '1h' });
        }

        console.log(user.role);
        
        res.json({ message: 'Login successful', data: { id: user._id, username: user.username , role: user.role }, token });
    } catch (error) {
        console.error('Error in logging:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = loginRouter;