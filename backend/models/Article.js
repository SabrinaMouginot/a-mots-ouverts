import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: String,
    content: { type: String, required: true },
    image: String,
    date: { type: Date, default: Date.now },
    reactions: { like: Number, laugh: Number, wow: Number, angry: Number }
});

export default mongoose.model("Article", ArticleSchema);
