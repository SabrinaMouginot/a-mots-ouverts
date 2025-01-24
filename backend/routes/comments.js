import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Récupérer tous les commentaires d'un article
router.get("/:articleId", async (req, res) => {
    try {
        const comments = await Comment.find({ articleId: req.params.articleId }).sort({ date: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération des commentaires." });
    }
});

// Ajouter un commentaire à un article
router.post("/:articleId", async (req, res) => {
    const { username, content } = req.body;
    if (!username || !content) {
        return res.status(400).json({ message: "Nom d'utilisateur et contenu obligatoires." });
    }

    try {
        const newComment = new Comment({ 
            articleId: req.params.articleId, 
            username, 
            content 
        });
        await newComment.save();
        res.json(newComment);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de l'ajout du commentaire." });
    }
});

export default router;
