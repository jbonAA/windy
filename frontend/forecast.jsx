import React from 'react';
import ForecastIndexItem from './forecastIndexItem';

class Forecast extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            weatherStation: this.props.weatherStation,
            tomorrowForecast: this.props.tomorrowForecast,
            currentForecast: this.props.currentForecast,
            quadrants: this.props.quadrants
        }


    }



    shouldComponentUpdate(nextState, nextProps) {
        console.log(this.state)
        console.log(nextState)
        if(this.state.weatherStation !== nextState.weatherStation){
            return true
        }else{
            return false
        }
    }


    render() {

        //iterate through forecasts and take a date with them
        //instead of tomorrows conditions

        const {
            currentForecast,
            tomorrowForecast,
            weatherStation
        } = this.props;

        let display;

        if(currentForecast.weather && tomorrowForecast.weather){

            console.log(currentForecast)
            console.log("_______")
            console.log(tomorrowForecast)
            display = (
                <div id="defaultInfo">
                    <div id="forecastTitle">
                        <h3>Current Conditions near {weatherStation}</h3>
                    </div>
                    <ForecastIndexItem key={currentForecast.temp} weather={currentForecast} station={weatherStation}/>
                        <h3 id="future">Tomorrow's Conditions</h3>
                    <ForecastIndexItem key={tomorrowForecast.temp} weather={tomorrowForecast} station={weatherStation}/>
                </div>
            )
        }else{
            display = (
                <div id="defaultInfo">
                    <span>
                        Nagivate around the map, marker will center the data and can be adjusted by clicking desired location on map.
                    </span>
                </div>
            )
        }   


        return (
            <div id="forecastDiv">

                {display}

                <div id="projectInfo">
                    description of the project
                </div>

                <div id="links">
                    <div id="icons">

                    </div>
                    <p>Repo Available on Github and LinkedIn</p>
                    <div id="icons">

                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast