import React from 'react';
import Map from './map.jsx';
import Forecast from './forecast.jsx';
import { LngLat, Marker } from 'mapbox-gl';
import WindDirection from '../logic/windDirection';

import Canvas from '../logic/generateCanvas';

const mapboxgl = require('mapbox-gl');

class Root extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            start: [-87.6298, 41.8781],
            zoom: 9,
            mapObj: {},
            marker: {},
            location: "",
            currentFor: {},
            tomorrowFor: {},
            quadrants: {},
            windData: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.applyWindVisContent = this.applyWindVisContent.bind(this)
    }

    componentDidMount() {
        const {start, mapObj} = this.state

        let mapContainer = document.getElementById("mapDiv")
        mapboxgl.accessToken = "pk.eyJ1IjoicHJvc2UwMDIxIiwiYSI6ImNrMzZoYWdidTAxcm8zaW82MW5jZmV6c2EifQ.PRbSpg500wqcoctnYFTIog";

        const map = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/dark-v10",
            center: [start[0], start[1]],
            zoom: this.state.zoom,
            hash: true
        })

        map.on("load", () => {

            let startPos = map.getCenter()
            
            let marker = new Marker();
            marker.setLngLat([startPos.lng, startPos.lat])
            marker._draggable = Boolean(true)
            marker.addTo(map)
            
        
            map.on("click", (e) => {
                e.preventDefault();
                let moveLng = e.lngLat.lng;
                let moveLat = e.lngLat.lat;

                marker.remove()

                marker = new Marker()
                marker.setLngLat([moveLng, moveLat])
                marker.addTo(map)

                this.setState({
                    marker
                })
            })

            this.setState({
                marker,
                mapObj: map
            })
        })

    }

    handleClick() {
        const {mapObj, marker} = this.state

        let newLng = marker._lngLat.lng;
        let newLat = marker._lngLat.lat;

        mapObj.jumpTo({
            center: [newLng, newLat],
            zoom: 10
        })

        let bounds = mapObj.getBounds();

        //mapbox object representing corners
        
        //objectively we can say that the set up for this project


        let nE = bounds.getNorthEast();
        let nW = bounds.getNorthWest();
        let sE = bounds.getSouthEast();
        let sW = bounds.getSouthWest();

        console.log(bounds)

        //grab height width of mapDiv for canvas/vis sizing

        let mD = document.getElementById("mapDiv")
        

        const infoGather = {
            allStations: [nE, nW, sE, sW],
            center: [newLng, newLat],
            width: mD.clientWidth,
            height: mD.clientHeight
        }

        //create initial Wind Object
        // const wind = new Promise((resolve, reject) => {
        //     resolve(new WindDirection(infoGather))
        // })

        const wind = new WindDirection(infoGather)
        console.log(wind)

        setTimeout(() => {
            // console.log(wind)
            // console.log(wind.forecastTomorrow)
            this.setState({
                location: wind.weatherStation,
                currentFor: wind.forecastNow,
                tomorrowFor: wind.forecastTomorrow,
                quadrants: wind.quadrants
            })
        }, 500)

        this.setState({
            windData: true
        })
    
    }

   
    async applyWindVisContent(quadrants, currentForecast) {
        console.log(quadrants)
        console.log(currentForecast)

        const canv = await new Canvas(quadrants, currentForecast)
        console.log(canv)
    }

    

    render() {

        const {currentFor, map, location, tomorrowFor, quadrants, windData} = this.state
        
        let display;

        if(!windData){
            display = null
        }else{
            display = (
                <button onClick={() => this.applyWindVisContent(quadrants, currentFor)}>Apply Wind Data</button>
            )
        }



        return(
            <div id="main">
                <div id="header">
                    <div id="headButton">
                        <button onClick={this.handleClick}>Check Local Forecast</button>
                        {/* if there is a canvas over the map
                        remove and reapply logic with lnglat from map
                        bounds, use forecast for map start */}
                        {display}
                    </div>
                    <div id="h2">
                        <h2>Bay Area Weather</h2>
                    </div>
                </div>
                <div id="components">
                    <Map map={map}/>
                    <Forecast 
                    currentForecast={currentFor}
                    tomorrowForecast={tomorrowFor}
                    weatherStation={location}
                    quadrants={quadrants}
                    />
                </div>
            </div>
        )
    }
}

export default Root