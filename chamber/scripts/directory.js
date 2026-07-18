const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error("Could not load member data.");
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error(error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong><br>${member.address}</p>
            <p><strong>Phone:</strong><br>${member.phone}</p>
            <p><strong>Email:</strong><br>${member.email}</p>
            <p><strong>Industry:</strong><br>${member.industry}</p>
            <p><strong>Membership:</strong> ${membershipName(member.membership)}</p>
            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>
        `;
        membersContainer.appendChild(card);
    });
}
function membershipName(level) {
    if (level === 1) {
        return "Member";
    } else if (level === 2) {
        return "Silver";
    } else if (level === 3) {
        return "Gold";
    } else {
        return "Member";
    }
}
getMembers();

/*  Grid/List View Buttons*/

const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");
gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});
listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

// /* Mobile Menu*/

// const menuButton = document.querySelector("#menuButton");
// const navigation = document.querySelector("#navigation");
// menuButton.addEventListener("click", () => {
//     navigation.classList.toggle("open");
// });