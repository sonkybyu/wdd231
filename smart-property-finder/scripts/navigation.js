// Responsive Navigation

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}