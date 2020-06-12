import React from 'react';

class ForecastIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            cloudCover: this.props.weather.cloudCover,
            feels_like: this.props.weather.feels_like,
            humidity: this.props.weather.humidity,
            temp: Math.floor(this.props.weather.temp), 
            weather: this.props.weather.weather,
            windSpeed: this.props.weather.windSpeed,
            windDirDeg: this.props.weather.windDirDeg
        }
    }



    render() {
        console.log(this.state)

        return (
            <div id="forecastItem">
                <p>{this.state.cloudCover}</p>
            </div>
        )
    }
}

export default ForecastIndexItem