const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#form-message");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value;
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.textContent =
                "Please complete all required fields.";
            return;
        }
        formMessage.textContent =
            `Thank you, ${name}. Your message has been received.`;
        contactForm.reset();

    });

}