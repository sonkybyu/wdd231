const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const modified = document.querySelector("#lastModified");

modified.textContent = `Last Modified: ${document.lastModified}`;