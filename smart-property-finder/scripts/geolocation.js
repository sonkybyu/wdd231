// ==========================================
// Geolocation Module
// Smart Property Finder
// ==========================================

const locationButton = document.querySelector("#locationBtn");
const locationText = document.querySelector("#user-location");
const nearbyContainer = document.querySelector("#nearby-properties");

if (locationButton) {
    locationButton.addEventListener("click", getUserLocation);
}
function getUserLocation() {
    if (!navigator.geolocation) {
        locationText.textContent =
            "Geolocation is not supported by your browser.";
        return;
    }
    locationText.textContent = "Finding your location...";
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        {
            enableHighAccuracy: true,
            timeout: 10000
        }
    );
}
async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationText.textContent =
        `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
    const response = await fetch("data/properties.json");
    const properties = await response.json();
    /*
      This is a demonstration for WDD231.

      Since the JSON file does not yet contain
      latitude and longitude values,
      we'll display the first three properties
      as "nearby" examples.

      Later, you can add coordinates to each
      property and calculate real distances.
    */
    nearbyContainer.innerHTML = "";
    properties
        .slice(0, 3)
        .forEach(property => {
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
                </div>
            `;
            nearbyContainer.append(card);
        });
}
function error() {
    locationText.textContent =
        "Unable to retrieve your location.";
}