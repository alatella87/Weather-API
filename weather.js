// API Key: 2a65cbdf809cf777e8b30a66b4ec5f82

// Example call 

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2a65cbdf809cf777e8b30a66b4ec5f82

// City ID : 
// {
//     "id": 2759794,
//     "name": "Amsterdam",
//     "country": "NL",
//     "coord": {
//         "lon": 4.88969,
//         "lat": 52.374031
//     }
// }

//  API Call
// By city ID
// Description:
// You can call by city ID. API responds with exact result.

// List of city ID city.list.json.gz can be downloaded here http://bulk.openweathermap.org/sample/

// We recommend to call API by city ID to get unambiguous result for your city.

// Parameters:
// id City ID
// Examples of API calls:
// api.openweathermap.org/data/2.5/weather?id=2172797 

class Weather {
    // Change weater location

    constructor(city, state) {
            this.apiKey = '2a65cbdf809cf777e8b30a66b4ec5f82';
            this.city = city;
            this.state = state;
        }
        // Fetch weather from API
    async getWeather() {
        // Get the API response for the given city at api.openweathermap.org
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}