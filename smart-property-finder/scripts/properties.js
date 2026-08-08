// ==========================================
// Homepage Property Display
// ==========================================

const featuredContainer =
    document.querySelector("#featured-properties");

const latestContainer =
    document.querySelector("#latest-properties");

async function loadHomepageProperties() {
    if (!featuredContainer && !latestContainer) {
        return;
    }
    try {

        const response =
            await fetch("data/properties.json");
        if (!response.ok) {
            throw new Error("Unable to load property data.");
        }
        const properties =
            await response.json();
        // Featured properties
        if (featuredContainer) {
            const featured =
                properties.filter(property =>
                    property.featured
                );
            featured.forEach(property => {
                featuredContainer.appendChild(
                    createPropertyCard(property)
                );
            });
        }
        // Latest properties
        if (latestContainer) {
            properties.slice(0, 4).forEach(property => {
                latestContainer.appendChild(
                    createPropertyCard(property)
                );
            });
        }
    } catch (error) {
        console.error(error);
        if (featuredContainer) {
            featuredContainer.innerHTML =
                "<p>Unable to load properties.</p>";
        }
        if (latestContainer) {
            latestContainer.innerHTML =
                "<p>Unable to load properties.</p>";
        }
    }
}
function createPropertyCard(property) {
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

    return card;
}


loadHomepageProperties();