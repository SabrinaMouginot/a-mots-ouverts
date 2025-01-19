import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
});

export default router;
