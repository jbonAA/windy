import * as d3 from 'd3'
import React from 'react'


class Visual {
    constructor(datum){
        this.datum = datum;
    }

    visInit(w, h) {
        const svg = d3.select("#components")
            .append("svg")
            .attr("id", 'svgToRemove')
            .attr("width", w)
            .attr("height", h)

        for(let i = 0; i < this.datum.length; i++){
            // this.formatBez(this.datum[i])
            console.log(this.datum[i], "datumi")
            let path = this.datum[i];
            if(path.tracks.length > 4){
                let d = this.formatPath(path.start, path.tracks)
                    svg.append("path")
                        .attr("d", d)
                        .attr("stroke", 'rgb(255, 255, 255)')
                        .attr("fill", "none")
            }

        }

    }

    formatPath(startPair, tracks) {
        let quarter = Math.floor(tracks.length / 4)
        let half = Math.floor(tracks.length / 2)
        console.log("quarter half", quarter, half)
        let collection = []

        collection.push(`M ${startPair[0]} ${startPair[1]}`)
        collection.push(`C ${tracks[quarter][0]} ${tracks[quarter][1]}`)
        collection.push(`${tracks[half][0]} ${tracks[half][1]}`)
        collection.push(`${tracks[tracks.length - 1][0]} ${tracks[tracks.length - 1][1]}`)

        console.log("collection", collection.join(" "))
        return collection.join(" ")
    }

}

export default Visual