// ==========================================
// Favorites Module
// Smart Property Finder
// ==========================================
const STORAGE_KEY = "favoriteProperties";
// Get favorites from Local Storage
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
// Save favorites
function saveFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}
// Check if a property is already saved
export function isFavorite(id) {
    const favorites = getFavorites();
    return favorites.includes(id);
}
// Add or Remove Favorite
export function toggleFavorite(id) {
    let favorites = getFavorites();
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }
    saveFavorites(favorites);
}
// Update button appearance
export function updateFavoriteButton(button, id) {
    if (!button) return;
    if (isFavorite(id)) {
        button.textContent = "★ Remove Favorite";
        button.classList.add("favorite");
    } else {
        button.textContent = "☆ Save to Favorites";
        button.classList.remove("favorite");
    }
}