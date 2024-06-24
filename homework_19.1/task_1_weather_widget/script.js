const content = document.querySelector('.content');
const citySelect = document.querySelector('.city');
citySelect.addEventListener('change', getWeather);

function getWeather() {
    const selected = citySelect.value
    const APIKey =  '4c24100df511807eecd4b46f78fd8a90'
    const query = `https://api.openweathermap.org/data/2.5/weather?q=${selected}&appid=${APIKey}`;

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const hours = ('0'+date.getHours()).slice(-2)
    const minutes = ('0'+date.getMinutes()).slice(-2)
    const weatherImage = 'https://openweathermap.org/img/wn/'

    fetch(query).then((response) => {
        return response.json()
    }).then((data) => {
        createWeather(data, date, months, month, day, hours, minutes, weatherImage)
    })
}


function createWeather(data, date, month, month, day, hours, minutes, weatherImage) {
    content.textContent = '';

    let weatherCard = document.createElement('div');
    content.appendChild(weatherCard);
    weatherCard.classList.add('weather-card');

    let weatherLeft = document.createElement('div');
    weatherCard.appendChild(weatherLeft);
    weatherLeft.classList.add('weather-left')

    let weatherDate = document.createElement('div');
    weatherLeft.appendChild(weatherDate);
    weatherDate.classList.add('weather-date', "font");
    weatherDate.textContent = (month + ' ' + date.getDate() + ', ' + date.getFullYear() + '-' + day);

    let weatherCity = document.createElement('div');
    weatherLeft.appendChild(weatherCity);
    weatherCity.classList.add('weather-city', "font");
    weatherCity.textContent = data.name;

    let weatherTime = document.createElement('div');
    weatherLeft.appendChild(weatherTime);
    weatherTime.classList.add('weather-time', "font");
    weatherTime.textContent = (date.getHours() + ':' + date.getMinutes());

    let humidity = document.createElement('div');
    weatherLeft.appendChild(humidity);
    humidity.classList.add("weather-humidity", "font");
    humidity.textContent = ("Humidity: " + data.main.humidity + '%')

    let pressure = document.createElement('div');
    weatherLeft.appendChild(pressure);
    pressure.classList.add("weather-pressure", "font");
    pressure.textContent = ("Pressure: " + data.main.pressure + ' hPa')

    let wind = document.createElement('div');
    weatherLeft.appendChild(wind);
    wind.classList.add("weather-wind", "font");
    wind.textContent = ("Wind: " + data.wind.speed + ' km/h')
    
    let weatherRight = document.createElement('div');
    weatherCard.appendChild(weatherRight);
    weatherRight.classList.add('weather-right')

    let weatherImages = document.createElement('img');
    weatherRight.appendChild(weatherImages);
    weatherImages.classList.add('weather-images')
    weatherImages.src = weatherImage + data.weather[0].icon + '.png'

    let weatherTemp = document.createElement('div');
    weatherRight.appendChild(weatherTemp);
    weatherTemp.classList.add('weather-temp', "font")
    weatherTemp.textContent = (Math.round(data.main.temp - 273.15) + "°C");

    let weatherFeels= document.createElement('div');
    weatherRight.appendChild(weatherFeels);
    weatherFeels.classList.add('weather-feels', "font")
    weatherFeels.textContent = ("Feels Like: " + Math.round(data.main.feels_like - 273.15) + "°C");

    let weatherDescription= document.createElement('div');
    weatherRight.appendChild(weatherDescription);
    weatherDescription.classList.add('weather-description', "font")
    weatherDescription.textContent = data.weather[0].description

    let time = document.createElement('div');
    weatherRight.appendChild(time);
    time.classList.add('weather-times', "font")
    time.textContent = (month + ' ' + date.getDate() + " " + hours + ':' + minutes);

    let restart = document.createElement('img');
    time.appendChild(restart);
    restart.classList.add('btn-restart')
    restart.src = "image/restart.png"

    restart.addEventListener('click', () =>{
        location.reload()
    })
};

getWeather();