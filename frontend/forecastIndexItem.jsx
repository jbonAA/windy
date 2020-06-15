import React from 'react';
import SVG from 'react-inlinesvg';

//test
import ClearDay from './SvgComponents/collection/01/clearDay'
//try importing component obj

import iconComponents from '../frontend/SvgComponents/iconExport';


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
            windDirDeg: this.props.weather.windDirDeg,
            station: this.props.station
        }

        this.format = this.format.bind(this)
        this.degreeToCardinal = this.degreeToCardinal.bind(this)
    }


    format(string) {
        let words = string.split(" ")
        let formatted = []
        words.forEach((word) => {
            let temp = word.split("")
            temp[0] = temp[0].toUpperCase()
            formatted.push(temp.join(""))
        })

        return formatted.join(" ")
    }

    degreeToCardinal(n) {

        let formatted = [];

        switch(n >= 0){
            case n < 11:
                formatted.push("N")
                break;
            case n < 33:
                formatted.push("NNE")
                break;
            case n < 56: 
                formatted.push("NE")
                break;
            case n < 78:
                formatted.push("ENE")
                break;
            case n < 101:
                formatted.push("E")
                break;
            case n < 123:
                formatted.push("ESE")
                break;
            case n < 146:
                formatted.push("SE")
                break;
            case n < 168:
                formatted.push("SSE")
                break;
            case n < 191:
                formatted.push("S")
                break;
            case n < 213:
                formatted.push("SSW")
                break;
            case n < 236:
                formatted.push("SW")
                break;
            case n < 258:
                formatted.push("WSW")
                break;
            case n < 281:
                formatted.push("W")
                break;
            case n < 303:
                formatted.push("WNW")
                break;
            case n < 326:
                formatted.push("NW")
                break;
            case n < 348:
                formatted.push("NNW")
                break;
            case n < 361:
                formatted.push("N")
                break;
            default:
                return formatted
        }

        return formatted[0]
    }

    gatherIcon(string) {
        return iconComponents[string]
    }

    //need a shouldComponentUpdate 
    shouldComponentUpdate(nextState, nextProps) {
        console.log("nextStateIndexItem")
        console.log(nextState)
        console.log("this.state")
        console.log(this.state)
        
        if(this.state.station !== nextState.station){
            return true
        }else{
            return false
        }
    }

    render() {

        console.log(this.state)
        const {
            cloudCover, feels_like,
            humidity, temp,
            weather, windSpeed, windDirDeg
        } = this.state;


        let TempComponent = this.gatherIcon(weather[0].icon)
        let description = this.format(weather[0].description);
        let direction = this.degreeToCardinal(windDirDeg);

        // console.log(TempComponent)
        // console.log("______")

        return (
            <div id="forecastItem">
                <div id="left">
                    <TempComponent />
                    <div id="description">
                        <ul>
                            <p>{temp}°</p>
                            <p>{description}</p>
                            <p>Feels Like: {Math.floor(feels_like)}°</p>

                        </ul>
                    </div>
                </div>
                <div id="right">
                    <ul>
                        <p>Cloud Cover: {cloudCover}%</p>
                        <p>Humidity: {humidity}%</p>
                        <p>Wind Speed: {windSpeed}</p>
                        <p>Wind Direction: {direction}</p>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ForecastIndexItem