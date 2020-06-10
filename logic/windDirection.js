class WindDirections {
    constructor(object) {
        this.state = object;
        this.forecastNow = {};
        this.forecastTomorrow = {};
        this.quadrants = {};

        this.getWind()
        this.getWeather()
    }

    getWind() {
        this.state.allStations.forEach(async (el, i) => {
            let forecast = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${el.lat}&lon=${el.lng}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
            forecast.json().then((res) => {
                //using an object to thwart asynchronicity
                this.quadrants[i] = res.wind
                //iterating through quadrants left to right top to bottom
            })
        })
        
    }

    async getWeather() {
        let [lng, lat] = [this.state.center[0], this.state.center[1]]
        let currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
        currentWeather.json().then((res) => {
            console.log("currentWeather")
            let [
                windSpeed,
                windDirDeg, 
                cloudCover, 
                temp, 
                feels_like,
                humidity,
                weather
            ] = [
                res.wind.speed,
                res.wind.deg,
                res.clouds.all,
                res.main.temp,
                res.main.feels_like,
                res.main.humidity,
                res.weather
            ]

            this.forecastNow = {
                windSpeed,
                windDirDeg,
                cloudCover,
                temp,
                feels_like,
                humidity,
                weather
            }

        })
    }


}

export default WindDirections