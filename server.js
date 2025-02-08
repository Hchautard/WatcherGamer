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
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
}));

// Routes

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, app).listen(3001, () => {
    console.log("Server running on https://localhost:3001");
});

export default router;