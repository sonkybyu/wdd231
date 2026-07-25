/* ====== JOIN PAGE ============ */

// ----------------------------
// Hidden Timestamp
// ----------------------------
const timestampField = document.querySelector("#timestamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}
// ----------------------------
// Membership Modals
// ----------------------------
const modalButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".closeModal");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalID = button.dataset.modal;
        const dialog = document.querySelector(`#${modalID}`);
        if (dialog) {
            dialog.showModal();
        }
    });
});
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("dialog").close();
    });
});
// ----------------------------
// Close dialog when clicking
// outside the dialog
// ----------------------------
const dialogs = document.querySelectorAll("dialog");
dialogs.forEach(dialog => {
    dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!inside) {
            dialog.close();
        }
    });

});