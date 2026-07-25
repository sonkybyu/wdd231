/* =========== THANK YOU PAGE ============== */
const params = new URLSearchParams(window.location.search);
function setValue(id, parameter) {
    const element = document.querySelector(`#${id}`);
    if (element) {
        element.textContent = params.get(parameter) || "Not provided";
    }
}
setValue("firstName", "firstName");
setValue("lastName", "lastName");
setValue("email", "email");
setValue("phone", "phone");
setValue("organization", "organization");
const timestamp = params.get("timestamp");
if (timestamp) {
    document.querySelector("#timestamp").textContent =
        new Date(timestamp).toLocaleString();
} else {
    document.querySelector("#timestamp").textContent =
        "Not available";
}