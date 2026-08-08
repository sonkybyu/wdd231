import { getFavorites, toggleFavorite } from "./favorites.js";

const favoritesGrid = document.querySelector("#favorites-grid");
const emptyMessage = document.querySelector("#empty-message");

async function loadFavorites() {
    const response = await fetch("data/properties.json");
    const properties = await response.json();
    const favorites = getFavorites();
    if (favorites.length === 0) {
        emptyMessage.textContent =
            "You have not saved any favorite properties.";
        return;
    }
    const favoriteProperties = properties.filter(property =>
        favorites.includes(property.id)
    );
    displayFavorites(favoriteProperties);
}
function displayFavorites(properties) {
    properties.forEach(property => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <img src="${property.image}"
                 alt="${property.title}"
                 loading="lazy">
            <div class="card-content">
                <h3>${property.title}</h3>
                <p>${property.location}</p>
                <p class="price">
                    ₦${property.price.toLocaleString()}
                </p>

                <a class="btn"
                   href="property.html?id=${property.id}">
                   View Details
                </a>
                <button
                    class="btn remove-btn"
                    data-id="${property.id}">
                    Remove Favorite
                </button>
            </div>
        `;
        favoritesGrid.append(card);
    });
    addButtonEvents();
}
function addButtonEvents() {
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            toggleFavorite(id);
            location.reload();
        });
    });
}

loadFavorites();