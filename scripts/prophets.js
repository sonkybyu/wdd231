const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.prophets);

    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // Create Elements
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        let portrait = document.createElement("img");

        // Populate Elements
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthDate.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}`;

        birthPlace.innerHTML = `<strong>Place of Birth:</strong> ${prophet.birthplace}`;

        // Image Attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute(
            "alt",
            `Portrait of ${prophet.name} ${prophet.lastname}`
        );
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "250");
        portrait.setAttribute("height", "300");

        // Append Elements
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });

};

getProphetData();