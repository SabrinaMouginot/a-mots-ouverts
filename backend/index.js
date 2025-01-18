import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Bienvenue sur À mots ouverts !");
});

app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
