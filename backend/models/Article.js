import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Article", ArticleSchema);
