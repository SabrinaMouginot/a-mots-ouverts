import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import articleRoutes from "./routes/articles.js";
import commentRoutes from "./routes/comments.js";

// Chargement des variables d'environnement
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connecté"))
.catch(err => console.error("❌ Erreur de connexion MongoDB :", err));

// Route de test
app.get("/", (req, res) => {
    res.send("Bienvenue sur À mots ouverts !");
});

// Utilisation des routes pour les articles
app.use("/api/articles", articleRoutes);
app.use("/api/comments", commentRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
