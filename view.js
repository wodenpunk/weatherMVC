export default class View {
    dom = {
        inputField : document.querySelector('.search-box')
    }

    getCity = () => {
        return this.dom.inputField.value;
    }
    showError = () => {
        alert("No weather found.");
        throw new Error("No weather found.");
    }

    // dateBuilder = d =>{
    //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //     let day = days[d.getDay()];
    //     let date = d.getDate();
    //     let month = months[d.getMonth()];
    //     let year = d.getFullYear();

    //     return `${day}, ${date} ${month} ${year}`;
    // }

    displayWeather = weather =>{
        console.log('im getting called');
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}, ${weather.sys.country}`;
    
        /*let now = new Date();
        let date = document.querySelector('.location .date');
        date.innerText = dateBuilder(now);*/
    
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    
        let weather_description = document.querySelector('.current .description');
        weather_description.innerText = weather.weather[0].description;
    }
}