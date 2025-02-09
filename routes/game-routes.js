import express from 'express';
// import * as GameController from '../controllers/game-controller.js';

const router = express();

// Create game
router.post('/', (req, res) => {
    GameController.createGame(req.body)
    .then((game) => {
        res.status(201).json(game);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

// Get game by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    GameController.getGameById(id)
    .then((game) => {
        res.status(200).json(game);
    })
    .catch((err) => {
        res.status(500).json({message: err.message});
    });
});

export default router;