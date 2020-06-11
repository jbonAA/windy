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
            console.log("check")
            return true
        }else{
            return false
        }
    }


    render() {

        console.log(this.state)
        
        let display;

        if(this.props.weatherStation){
            display = (
                <div id="forecastTitle">
                    <h3>Local Forecast near {this.props.weatherStation}</h3>
                    <ForecastIndexItem weather={this.props.currentForecast}/>
                    <ForecastIndexItem weather={this.props.tomorrowForecast}/>
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

                <div id="forecastItem">

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