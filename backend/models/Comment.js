import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    articleId: { type: mongoose.Schema.Types.ObjectId, ref: "Article", required: true },
    username: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Comment", CommentSchema);
