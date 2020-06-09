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
                <div id="title">
                    <h2>Dialing In Throttling Up</h2>
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