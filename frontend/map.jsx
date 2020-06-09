import React from 'react';

class Map extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        //pull in the map object
    }

    render() {
        return (
            <div id="mapDiv" ref={el => this.mapContainer = el}></div>
        )
    }
}

export default Map