class WindDirections {
    constructor(object) {
        this.state = object;
        this.forecastNow = {};
        this.forecastTomorrow = {};
        this.quadrants = {};
        this.weatherStation = false;

        this.getWeather()
        this.tomorrow()
        this.getWind()
    }

    getWind() {
        this.state.allStations.forEach(async (el, i) => {
            let forecast = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${el.lat}&lon=${el.lng}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
            forecast.json().then((res) => {
                //using an object to thwart asynchronicity
                this.quadrants[i] = res.wind
                //iterating through quadrants left to right top to bottom
                //also use this forecast to find weather tomorrow in area


            })
        })
        
    }

    async tomorrow() {
        let [lng, lat] = [this.state.center[0], this.state.center[1]]
        let currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
        currentWeather.json().then((res) => {
            // console.log(res)
            // console.log("tomorrowset")
            let [
                windSpeed,
                windDirDeg,
                cloudCover,
                temp,
                feels_like,
                humidity,
                weather,
                name,
                dateTime
            ] = [
                res.list[3].wind.speed,
                res.list[3].wind.deg,
                res.list[3].clouds.all,
                res.list[3].main.temp,
                res.list[3].main.feels_like,
                res.list[3].main.humidity,
                res.list[3].weather,
                res.city.name,
                res.list[3].dt_txt
            ]
            

            this.forecastTomorrow = {
                windSpeed,
                windDirDeg,
                cloudCover,
                temp,
                feels_like,
                humidity,
                weather,
                name,
                dateTime
            }
        })
    }

    async getWeather() {
        let [lng, lat] = [this.state.center[0], this.state.center[1]]
        let currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2e14d65f0b3ac59338aec11f11a66da5&units=imperial`)
        currentWeather.json().then((res) => {
            // console.log(res)
            // console.log('currentForecaset')
            let [
                windSpeed,
                windDirDeg, 
                cloudCover, 
                temp, 
                feels_like,
                humidity,
                weather,
                name
            ] = [
                res.wind.speed,
                res.wind.deg,
                res.clouds.all,
                res.main.temp,
                res.main.feels_like,
                res.main.humidity,
                res.weather,
                res.name
            ]

            this.forecastNow = {
                windSpeed,
                windDirDeg,
                cloudCover,
                temp,
                feels_like,
                humidity,
                weather,
                name
            }
            this.weatherStation = res.name

        })
    }


}

export default WindDirections