const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Close all other questions
        faqQuestions.forEach((item) => {

            item.setAttribute("aria-expanded", "false");

            item.nextElementSibling.classList.remove("open");

            item.querySelector("span").textContent = "+";

        });

        // Open selected question
        if (!isOpen) {

            question.setAttribute("aria-expanded", "true");

            answer.classList.add("open");

            question.querySelector("span").textContent = "−";

        }

    });

});