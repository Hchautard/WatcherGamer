import express from 'express';
import * as UserController from '../controllers/user-controller.js';

const router = express();

// Create user
router.post('/', (req, res) => {
    UserController.createUser(req.body)
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
router.get('/username/:username', async (req, res, next) => {
    try {
        const username = req.params.username;
        const user = await UserController.getUserByUsername(username);

        if (!user || user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        next(err); // Passe l'erreur au middleware global d'Express
    }
});

export default router;