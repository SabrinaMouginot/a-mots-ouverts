import express from "express";
import Article from "../models/Article.js";
import authMiddleware from "../middlewares/auth.js"; // Protection admin

const router = express.Router();

// Récupérer tous les articles (triés du plus récent au plus ancien)
router.get("/", async (req, res) => {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
});

// Ajouter un article (admin uniquement)
router.post("/", authMiddleware, async (req, res) => {
    const { title, subtitle, content, image } = req.body;
    const newArticle = new Article({ title, subtitle, content, image });
    await newArticle.save();
    res.json(newArticle);
});

export default router;
