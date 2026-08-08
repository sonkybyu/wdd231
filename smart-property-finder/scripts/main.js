// ==========================================
// Smart Property Finder
// Main JavaScript Module
// ==========================================

//  copyright year
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}
// Display last modified date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;
}