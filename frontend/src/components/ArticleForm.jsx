import { useState } from "react";
import PropTypes from "prop-types";

function ArticleForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, subtitle, content, image });
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Sous-titre" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                <textarea placeholder="Contenu" value={content} onChange={(e) => setContent(e.target.value)} required />
                <input type="text" placeholder="Image URL (optionnel)" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit">Publier</button>
            </form>
        </div>
    );
}

export default ArticleForm;

ArticleForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
