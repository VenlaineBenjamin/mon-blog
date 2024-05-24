import "../assets/styles/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");
let errors = [];

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const article = Object.fromEntries(formData.entries());
    if (formIsValid(article)) {
        const json = JSON.stringify(article);
        // Nous ferons la requête ici !
    }
});

const formIsValid = (article) => {
    if (!article.author || !article.category || !article.content) {
        errors.push("Vous devez renseigner tous les champs");
    } else {
        errors = [];
    }
    if (article.content.length < 50) {
        errors.push("Le contenu doit faire au moins 50 caractères");
    } else {
        errors = [];
    }
    if (errors.length) {
        let errorHTML = "";
        errors.forEach((e) => {
            errorHTML += `<li>${e}</li>`;
        });
        errorElement.innerHTML = errorHTML;
        return false;
    } else {
        errorElement.innerHTML = "";
        return true;
    }
};
