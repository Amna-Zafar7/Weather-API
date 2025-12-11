const input = document.getElementById("city");
const div = document.getElementById("main");
const API_KEY = '80d5393ce88979e2c8686cce2f1f959a';


input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {
    let city = input.value.trim();
    if(city === "") {
        div.innerHTML = "<p>Please enter a city name!</p>";
        return;
    }

    div.innerHTML = "<p>Loading...</p>";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        

        div.innerHTML = `
            <h1>${data.main.temp}°C</h1>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Country: ${data.sys.country}</p>
        `;
    } catch (error) {
        div.innerHTML = "<p>Error fetching data</p>";
    }
}
