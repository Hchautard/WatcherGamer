import express from 'express';
import jwt from 'jsonwebtoken';
import * as UserController from '../controllers/user-controller.js';

const router = express();

// Create user
router.post('/register', (req, res) => {
    console.log(req.body);
    UserController.createUser(req)
    .then((user) => {
        res.status(201).json(user);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

// Get user by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    UserController.getUserById(id)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

// Get user by username
router.get('/username/:username', (req, res) => {
    const username = req.params.username;
    console.log("route:" + username);
    UserController.getUserByUsername(username)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

export default router;