import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
const router = express.Router();
import jwt from "jsonwebtoken";
import { authenticateToken } from "./middleware/authentication.js";

dotenv.config();

// Middleware
app.use(express.json());

// Cors 
app.use(cors({
    origin: "http://localhost:3000", // Remplacez par l'URL de votre front-end
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Si vous utilisez des cookies
}));

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user , process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
});

const posts = [
    {
        username: "Kyle",
        title: "Post 1"
    },
    {
        username: "Jim",
        title: "Post 2"
    }
];



app.listen(3001, () => {
    console.log("Server listening on port 3001");
});

export default router;