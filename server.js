import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import authRoutes from "./routes/auth-routes.js";
import https from "https";
import http from "http";
import fs from "fs";

const app = express();
const router = express.Router();

dotenv.config();

// Middleware
app.use(express.json());

// Cors 
app.use(cors({
    origin: "http://localhost:3000", // Remplacez par l'URL de votre front-end
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Si vous utilisez des cookies
}));

// Routes

app.get('/auth', authRoutes);
app.use('/user', userRoutes);


// exemple de get avec middleware
// app.get('/posts', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name));
// });

// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const user = { name: username };

//     const accessToken = jwt.sign(user , process.env.ACCESS_TOKEN_SECRET);
//     res.json({ accessToken: accessToken });
// });

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, app).listen(3001, () => {
    console.log("Server running on https://localhost:3001");
});

export default router;