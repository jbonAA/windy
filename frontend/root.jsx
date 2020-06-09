import React from 'react';
import Map from './map.jsx';
import Forecast from './forecast.jsx';
import { LngLat } from 'mapbox-gl';
const mapboxgl = require('mapbox-gl')

class Root extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            start: [-87.6298, 41.8781],
            zoom: 9,
            mapObj: {}
        }

        this.handleClick = this.handleClick.bind(this)
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
            
            this.setState({
                mapObj: map
            })
        })

    }

    handleClick() {
        const {mapObj} = this.state

        let lng = mapObj.getCenter().lng.toFixed(4)
        let lat = mapObj.getCenter().lat.toFixed(4)
        let bounds = mapObj.getBounds();
        mapObj.setZoom(9)
        console.log(bounds)


        this.setState({
            start: [lng, lat],
            zoom: 9,
            mapObj: mapObj
        })
    }

    render() {
        const {start, map} = this.state

        return(
            <div id="main">
                <div id="header">
                    <div id="headButton">
                        <button onClick={this.handleClick}>Apply Wind Data</button>
                        {/* if there is a canvas over the map
                        remove and reapply logic with lnglat from map
                        bounds, use forecast for map start */}
                    </div>
                    <div id="h2">
                        <h2>Bay Area Weather</h2>
                    </div>
                </div>
                <div id="components">
                    <Map map={map}/>
                    <Forecast start={start}/>
                </div>
            </div>
        )
    }
}

export default Root