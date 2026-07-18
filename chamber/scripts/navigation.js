const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute(  "aria-expanded", !expanded );
});