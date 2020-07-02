import React from 'react';
import ForecastIndexItem from './forecastIndexItem';

import iconComponents from '../frontend/SvgComponents/iconExport';


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

        let TempGit = iconComponents["Github"]
        let TempIn = iconComponents["LinkedIn"]

        let display;

        if(currentForecast.weather && tomorrowForecast.weather){

            // console.log(currentForecast)
            // console.log("_______")
            // console.log(tomorrowForecast)
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
                    <span id="descript">
                        D3 Visualization allows user to find forecasts and view
                        a representation of current wind conditions in a particular area.
                        Click desired location on map then Check Local Forecast extracts
                        lat/lng coords from marker's location, bounds from the map, returning API data. 

                        <br/>
                        Points are generated and used to model paths based on the
                        conditions of the wind within a particular quadrant in the map, of
                        which, there are 5. Each path's collection of control points are mapped
                        to a quadratic bezier curve reflecting change in slope; assuming minimal
                        projection distortion with this nearly conformal map projection.
                        <br/>

                    </span>
                </div>

                <div id="links">
                    <div id="icons">
                        <TempGit id="iconSizing"/>
                        {/* githubIconAsTemporaryComponent */}
                    </div>
                    <p>Repo Available on Github and LinkedIn</p>
                    <div id="icons">
                        <TempIn id="iconSizing"/>
                        {/* linkedInIconAsTempComponent */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast