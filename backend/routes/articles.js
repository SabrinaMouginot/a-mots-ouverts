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

// Modifier un article (admin uniquement)
router.put("/:id", authMiddleware, async (req, res) => {
    const { title, subtitle, content, image } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, { title, subtitle, content, image }, { new: true });
    res.json(updatedArticle);
});


// Supprimer un article (admin uniquement)
router.delete("/:id", authMiddleware, async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article supprimé" });
});

// Ajouter les réactions
router.post("/:id/reactions", async (req, res) => {
    const { type } = req.body; // type = like, laugh, wow, angry
    const article = await Article.findById(req.params.id);
    article.reactions[type] = (article.reactions[type] || 0) + 1;
    await article.save();
    res.json(article);
});

export default router;
