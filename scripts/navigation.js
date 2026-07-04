
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");
// Toggle navigation on small screens
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    // Change icon
    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "&times;";
        menuButton.setAttribute("aria-label", "Close Navigation");
    } else {
        menuButton.innerHTML = "&#9776;";
        menuButton.setAttribute("aria-label", "Open Navigation");
    }
});
// Close navigation when window is resized
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navigation.classList.remove("open");
        menuButton.innerHTML = "&#9776;";
    }
});