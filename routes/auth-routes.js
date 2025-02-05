import express from 'express';
import jwt from "jsonwebtoken";
import * as UserController from '../controllers/user-controller.js';
import * as AuthController from '../controllers/auth-controller.js';

const router = express();

// Login 
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if user exists
    const userCheck = await UserController.getUserByUsername(username);

    if (!userCheck || userCheck.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    if (userCheck[0].password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate access token
    const userId = userCheck[0].id;
    const token = jwt.sign(userId, process.env.ACCESS_TOKEN_SECRET);
    AuthController.setUserToken({ token, username });

    return res.status(200).json({ token });
});

export default router;