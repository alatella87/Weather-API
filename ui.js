class UI {

    constructor() {

        this.city = document.getElementById('city');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.humidity = document.getElementById('humidity');
        this.temp_min = document.getElementById('temp_min');
        this.temp_max = document.getElementById('temp_max');

    }

    // Display profile in ui

    paint(weather) {

        this.city.innerHTML = ` ${weather.name}`;
        this.desc.innerHTML = ` ${weather.weather[0].description.toUpperCase()}`;
        this.temp.innerHTML = ` ${weather.main.temp} °C`;
        this.humidity.innerHTML = `<b>Humidity:</b> ${weather.main.humidity}`;
        this.temp_min.innerHTML = `<b>Temp min:</b> ${weather.main.temp_min} °C`;
        this.temp_max.innerHTML = `<b>Temp max:</b> ${weather.main.temp_max} °C`;

    }
}