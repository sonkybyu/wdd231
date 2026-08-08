// ==========================================
// Property Search and Filtering
// ==========================================

let properties = [];
const locationInput =
    document.querySelector("#searchLocation");

const propertyType =
    document.querySelector("#propertyType");

const bedrooms =
    document.querySelector("#bedrooms");

const priceRange =
    document.querySelector("#priceRange");

const sortPrice =
    document.querySelector("#sortPrice");

const propertyGrid =
    document.querySelector("#property-grid");
async function initializeSearch() {
    if (!propertyGrid) {
        return;
    }
    try {
        const response =
            await fetch("data/properties.json");
        if (!response.ok) {
            throw new Error("Unable to load properties.");
        }
        properties = await response.json();
        displayProperties(properties);
        locationInput?.addEventListener(
            "input",
            filterProperties
        );
        propertyType?.addEventListener(
            "change",
            filterProperties
        );

        bedrooms?.addEventListener(
            "change",
            filterProperties
        );
        priceRange?.addEventListener(
            "change",
            filterProperties
        );
        sortPrice?.addEventListener(
            "change",
            filterProperties
        );
    } catch (error) {
        console.error(error);
        propertyGrid.innerHTML = `
            <p>
                Sorry, the property listings could not
                be loaded at this time.
            </p>
        `;
    }
}
function filterProperties() {
    let filteredProperties = [...properties];
    // Location
    const location =
        locationInput?.value.trim().toLowerCase() || "";
    if (location) {
        filteredProperties =
            filteredProperties.filter(property =>
                property.location
                    .toLowerCase()
                    .includes(location)
            );
    }
    // Property Type
    if (propertyType?.value) {
        filteredProperties =
            filteredProperties.filter(property =>
                property.type === propertyType.value
            );
    }
    // Bedrooms
    if (bedrooms?.value) {
        const bedroomValue =
            Number(bedrooms.value);
        if (bedroomValue === 4) {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.bedrooms >= 4
                );
        } else {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.bedrooms === bedroomValue
                );
        }
    }
    // Price
    if (priceRange?.value) {
        const selectedPrice =
            Number(priceRange.value);
        if (selectedPrice === 100000) {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.price <= 100000
                );
        } else if (selectedPrice === 250000) {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.price > 100000 &&
                    property.price <= 250000
                );
        } else if (selectedPrice === 500000) {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.price > 250000 &&
                    property.price <= 500000
                );
        } else if (selectedPrice === 1000000) {
            filteredProperties =
                filteredProperties.filter(property =>
                    property.price > 500000
                );
        }
    }
    // Sort
    if (sortPrice?.value === "low") {
        filteredProperties.sort(
            (a, b) => a.price - b.price
        );
    } else if (sortPrice?.value === "high") {
        filteredProperties.sort(
            (a, b) => b.price - a.price
        );
    }
    displayProperties(filteredProperties);
}
function displayProperties(propertyList) {
    propertyGrid.innerHTML = "";
    const propertyCount =
        document.querySelector("#property-count");

    if (propertyCount) {
        propertyCount.textContent =
            `${propertyList.length} ${
                propertyList.length === 1
                    ? "property"
                    : "properties"
            } found`;
    }
    if (propertyList.length === 0) {
        propertyGrid.innerHTML = `
            <div class="no-results">
                <h3>No Properties Found</h3>
                <p>
                    Try changing your search or
                    filter options.
                </p>
            </div>
        `;
        return;
    }
    propertyList.forEach(property => {
        const card =
            document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <img
                src="${property.image}"
                alt="${property.title}"
                loading="lazy">
            <div class="card-content">
                <h3>${property.title}</h3>
                <p>
                    <strong>Location:</strong>
                    ${property.location}
                </p>
                <p class="price">
                    ₦${property.price.toLocaleString()}
                </p>
                <p>
                    ${property.bedrooms} Bedroom(s)
                    |
                    ${property.bathrooms} Bathroom(s)
                </p>
                <a
                    class="btn"
                    href="property.html?id=${property.id}">
                    View Details
                </a>
            </div>
        `;
        propertyGrid.appendChild(card);
    });
}
initializeSearch();