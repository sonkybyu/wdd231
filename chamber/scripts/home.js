const membersURL = "data/members.json";
const spotlightContainer = document.querySelector("#spotlight-container");

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error("Unable to load chamber members.");
        }

        const members = await response.json();

        displaySpotlights(members);

    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {

    // Only Silver (2) and Gold (3) members
    const qualifiedMembers = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    // Shuffle the array
    const shuffled = [...qualifiedMembers].sort(() => Math.random() - 0.5);

    // Randomly display either 2 or 3 members
    const numberOfSpotlights = Math.random() < 0.5 ? 2 : 3;

    const selectedMembers = shuffled.slice(0, numberOfSpotlights);

    spotlightContainer.innerHTML = "";

    selectedMembers.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.image}"
                 alt="${member.name}"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p>
                <a href="${member.website}"
                   target="_blank"
                   rel="noopener">
                   Visit Website
                </a>
            </p>

            <p>
                <strong>Membership:</strong>
                ${getMembership(member.membership)}
            </p>
        `;

        spotlightContainer.appendChild(card);

    });

}

function getMembership(level) {

    if (level === 3) {
        return "Gold Member";
    } else if (level === 2) {
        return "Silver Member";
    } else {
        return "Member";
    }

}

getSpotlights();