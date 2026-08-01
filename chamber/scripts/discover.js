import { places } from "../data/places.mjs";

/* ============== Discover Page ====== */

const cardsContainer = document.querySelector("#discoverGrid");
const visitMessage = document.querySelector("#visitMessage");

/* --------------------Display Cards ---------------- */
function displayPlaces(places) {
    cardsContainer.innerHTML = "";
    places.forEach((place, index) => {
        const card = document.createElement("article");
        card.className = `discover-card card${index + 1}`;
        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img
                    src="${place.image}"
                    alt="${place.alt}"
                    width="300"
                    height="200"
                    loading="lazy">
            </figure>
            <address>
                ${place.address}
            </address>
            <p>
                ${place.description}
            </p>
            <button type="button">
                Learn More
            </button>
        `;
        cardsContainer.appendChild(card);
    });
}
displayPlaces(places);

/* -------- Last Visit Message ---- */
const today = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisit"));
if (!lastVisit) {
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";
}
else {
    const daysBetween =
        Math.floor((today - lastVisit) / 86400000);
    if (daysBetween < 1) {
        visitMessage.textContent =
            "Back so soon! Awesome!";
    }
    else if (daysBetween === 1) {
        visitMessage.textContent =
            "You last visited 1 day ago.";
    }
    else {
        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;
    }
}
localStorage.setItem("lastVisit", today);