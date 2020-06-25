import { curveBasis } from "d3";
import * as d3 from 'd3'


class Path {
    constructor(cp, pos, xS, yS){
        this.tracks = cp;
        this.start = pos;
        this.xScale = xS;
        this.yScale = yS;
        this.coords = []

        this.formatCoords(this.start, this.tracks)
        //where the element will be created and attributed before added
    }


    formatCoords(start, track) {
        this.coords.push({x: start[0], y: start[1]})
        track.forEach((el) => {
            this.coords.push({x: el[0], y: el[1]})
        })

        console.log("coords", this.coords)
    }   



    appendToSvg(data) {
        
        let line = path
    }

}

export default Path