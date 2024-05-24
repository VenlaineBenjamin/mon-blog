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
        try {
            const json = JSON.stringify(article);
            const response = await fetch("https://restapi.fr/api/article", {
                method: "POST",
                body: json,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const body = await response.json();
            console.log(body);
        } catch (error) {
            console.error("Erreur lors de l'envoi des données : ", error);
        }
    }
});

const formIsValid = (article) => {
    if (
        !article.author ||
        !article.category ||
        !article.content ||
        !article.title ||
        !article.img
    ) {
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
