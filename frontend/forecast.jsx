import React from 'react';

class Forecast extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div id="forecastDiv">
                <div id="forecastTitle">
                    <h3>Local Forecast</h3>
                </div>
                <div id="forecastItem">

                </div>
                <div id="forecastItem">

                </div>
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