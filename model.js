export default class Model{
    apiKey = '584c3e6bb7b26827b61cafaba5da23fa'

    createURL = query => {
        return `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${this.apiKey}`;
    }

    getWeather = (query) => {
        return fetch(this.createURL(query))
        .then(weather => {
          return weather.json();
        })
    }
}