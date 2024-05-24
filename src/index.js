import "./assets/javascripts/lucide.js";
import "./assets/styles/styles.scss";
import "./index.scss";

const articleContainerElement = document.querySelector(".article-container");

const createArticles = (article) => {
    const articleDOM = article.map((article) => {
        const articleDOM = document.createElement("div");
        articleDOM.classList.add("article");
        articleDOM.innerHTML = `
        <div class="article">
                            <img src="${article.img}" alt="Fake user">
                        <h2>${article.title}</h2>
                        <p class="article-author">${article.author} - ${article.category}</p>
                        <p class="article-content">
                            ${article.content}
                        </p>
                        <div class="article-actions">
                            <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
                        </div>
                    </div>
        `;
        return articleDOM;
    });
    articleContainerElement.innerHTML = "";
    articleContainerElement.append(...articleDOM);
};

const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/article");
        let articles = await response.json();
        // Restapi retoune un object s'il n'y a q'un seul article
        // nous devons donc le transformer en tableau
        if (!Array.isArray(articles)) {
            articles = [articles];
        }
        createArticles(articles);
    } catch (e) {
        console.error(e);
    }
};

fetchArticle();
