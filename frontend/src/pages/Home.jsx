import { useEffect, useState } from "react";

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/articles")
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div>
            <h1>À mots ouverts</h1>
            <div className="article-container">
                {articles.map(article => (
                    <div key={article._id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <hr />
                    </div>
                ))}
                <div className="reactions">
                    <span>👍</span> <span>😆</span> <span>😮</span> <span>🤬</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
