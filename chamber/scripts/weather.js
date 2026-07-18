// Uyo, Akwa Ibom, Nigeria
const lat = 5.0377;
const lon = 7.9128;

const apiKey = "d7bae8078117bd66fd702fa8ca1bf78e";
// Current weather endpoint
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
// 5-day / 3-hour forecast endpoint
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const currentWeather = document.querySelector("#current-weather");
const forecastContainer = document.querySelector("#forecast");
async function getWeather() {
    try {
        const currentResponse = await fetch(currentURL);
        const forecastResponse = await fetch(forecastURL);
        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error("Unable to retrieve weather information.");
        }
        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentData);
        displayForecast(forecastData);

    } catch (error) {
        console.error(error);
        currentWeather.innerHTML = "<p>Weather information is currently unavailable.</p>";
    }
}
function displayCurrentWeather(data) {
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    currentWeather.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png"
             alt="${description}">
        <p><strong>${Math.round(data.main.temp)}°C</strong></p>
        <p>${capitalize(description)}</p> `;
}
function displayForecast(data) {
    forecastContainer.innerHTML = "";

    // Around midday each day
    const dailyForecasts = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );
    dailyForecasts.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt);
        const weekday = date.toLocaleDateString("en-US", {
            weekday: "long"
        });
        const card = document.createElement("div");
        card.classList.add("forecast-day");
        card.innerHTML = `
            <strong>${weekday}</strong><br>
            ${Math.round(day.main.temp)}°C
        `;
        forecastContainer.appendChild(card);
    });
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
getWeather();