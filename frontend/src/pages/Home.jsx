import { useEffect, useState } from "react";
import CommentSection from "../components/CommentSection";

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/api/articles")
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(err => console.error("Erreur de chargement des articles :", err));
    }, []);

    return (
        <div>
            <h1>À mots ouverts</h1>
            {articles.length === 0 ? (
                <p>Aucun article disponible.</p>
            ) : (
                articles.map(article => (
                    <div key={article._id} className="article-container">
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <CommentSection articleId={article._id} />
                        <div className="reactions">
                            <span>👍</span> <span>😆</span> <span>😮</span> <span>🤬</span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Home;
