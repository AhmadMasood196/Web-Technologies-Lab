const apiKey = "94a3573c0159bdc9cf5c9c717596c929";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");

// Load last searched city
window.onload = () => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        cityInput.value = lastCity;
        fetchWeather(lastCity);
    }
};

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    localStorage.setItem("lastCity", city);
    fetchWeather(city);
});

function fetchWeather(city) {
    weatherBox.innerHTML = "Loading...";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherBox.innerHTML = "❌ City not found";
                return;
            }

            const cityName = data.name;
            const temp = data.main.temp;
            const condition = data.weather[0].main;

            weatherBox.innerHTML = `
                <h3>${cityName}</h3>
                <p>🌡 Temperature: <b>${temp}°C</b></p>
                <p>☁ Condition: <b>${condition}</b></p>
            `;
        })
        .catch(error => {
            weatherBox.innerHTML = "⚠ Error fetching data";
            console.log(error);
        });
}