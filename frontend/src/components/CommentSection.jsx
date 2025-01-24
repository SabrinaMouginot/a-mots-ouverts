import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function CommentSection({ articleId }) {
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + `/api/comments/${articleId}`)
            .then(response => response.json())
            .then(data => setComments(data));
    }, [articleId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = { username, content };

        const response = await fetch(import.meta.env.VITE_API_URL + `/api/comments/${articleId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newComment),
        });

        if (response.ok) {
            const savedComment = await response.json();
            setComments([savedComment, ...comments]); // Ajoute le nouveau commentaire en haut
            setUsername("");
            setContent("");
        }
    };

    return (
        <div>
            <h3>Commentaires</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Votre nom" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <textarea placeholder="Écrire un commentaire..." value={content} onChange={(e) => setContent(e.target.value)} required />
                <button type="submit">Envoyer</button>
            </form>
            <ul>
                {comments.map((comment) => (
                    <li key={comment._id}>
                        <strong>{comment.username}</strong> : {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentSection;

CommentSection.propTypes = {
    articleId: PropTypes.string.isRequired,
};
