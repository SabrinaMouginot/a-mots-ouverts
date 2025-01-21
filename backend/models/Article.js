import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: String,
    content: { type: String, required: true },
    image: String,
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Article", ArticleSchema);
