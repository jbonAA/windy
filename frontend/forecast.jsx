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
        // console.log(this.state)
        console.log(nextState)
        if(this.state.weatherStation !== nextState.weatherStation){
            console.log("check")
            return true
        }else if(this.state.currentForecast !== nextState.currentForecast){
            console.log
            return true
        }else{
            return false
        }
    }


    render() {
        
        let display;

        if(this.props.currentForecast.weather && this.props.tomorrowForecast.weather){
            console.log(this.state)
            console.log("_______")
            console.log(this.props)
            display = (
                <div id="defaultInfo">
                    <div id="forecastTitle">
                        <h3>Current Conditions near {this.props.weatherStation}</h3>
                    </div>
                    <ForecastIndexItem key={this.props.currentForecast.weather[0].id} weather={this.props.currentForecast} station={this.props.weatherStation}/>
                        <h3 id="future">Tomorrow's Conditions</h3>
                    <ForecastIndexItem key={this.props.tomorrowForecast.weather[0].id} weather={this.props.tomorrowForecast} station={this.props.weatherStation}/>
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