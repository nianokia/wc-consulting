import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3388;

app.use(cors());

app.get("/", (req, res) => {
    console.log("Welcome to Wright Choice Consulting.");
});

app.listen(3000, () => {
    console.log("WCC running on http://localhost:3000/");
});