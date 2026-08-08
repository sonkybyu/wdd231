import {
    toggleFavorite,
    updateFavoriteButton
} from "./favorites.js";

const container = document.querySelector("#property-details");
const params = new URLSearchParams(window.location.search);
const propertyId = Number(params.get("id"));
async function loadProperty() {

    try {
        const response = await fetch("data/properties.json");
        if (!response.ok) {
            throw new Error("Unable to load property data.");
        }
        const properties = await response.json();
        const property = properties.find(item => item.id === propertyId);
        if (!property) {
            container.innerHTML = `
                <h2>Property Not Found</h2>
                <p>The requested property could not be found.</p>
            `;
            return;
        }
        displayProperty(property);
    } catch (error) {
        console.error(error);
        container.innerHTML = `
            <h2>Error</h2>
            <p>Unable to load property details.</p>
        `;
    }
}
function displayProperty(property) {
  container.innerHTML = `
<div class="property-detail">
    <img src="${property.image}"
         alt="${property.title}"
         loading="lazy">
    <div class="property-info">
        <h2>${property.title}</h2>
        <p class="price">
            ₦${property.price.toLocaleString()}
        </p>
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Type:</strong> ${property.type}</p>
        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
        <p>${property.description}</p>
        <h3>Amenities</h3>
        <ul>
            ${property.amenities
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>
        <h3>Contact Agent</h3>
        <p>${property.agent}</p>
        <p>${property.phone}</p>
        <button
            id="favoriteBtn"
            class="btn">
        </button>
    </div>
</div>
`;

const favoriteButton = document.querySelector("#favoriteBtn");
updateFavoriteButton(favoriteButton, property.id);
favoriteButton.addEventListener("click", () => {
    toggleFavorite(property.id);
    updateFavoriteButton(favoriteButton, property.id);
});
}
loadProperty();