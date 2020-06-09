import React from 'react';
import Map from './map.jsx';
import Forecast from './forecast.jsx';

class Root extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="main">
                <div id="header">
                    <div id="headButton">
                        <button>Apply Wind Data</button>
                        {/* if there is a canvas over the map
                        remove and reapply logic with lnglat from map
                        bounds, use forecast for map center */}
                    </div>
                    <div id="h2">
                        <h2>Bay Area Weather</h2>
                    </div>
                </div>
                <div id="components">
                    <Map />
                    <Forecast />
                </div>
            </div>
        )
    }
}

export default Root