function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'aadab3433febaf892685d87a5d820144';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2> Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} </p>
        <p>Weather: ${data.weather[0].description}</p>`
    })

}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails)