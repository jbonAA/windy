import * as d3 from 'd3'
import React from 'react'


class Visual {
    constructor(datum){
        this.datum = datum;
    }

    visInit(w, h) {
        const canv = d3.select("#components")
            .append("svg")
            .attr("id", 'svgToRemove')
            .attr("width", w)
            .attr("height", h)


        for(let i = 0; i < this.datum.length; i++){
            let p = this.datum[i];
            if(p.tracks.length > 4){
                let d = this.formatPath(p.start, p.tracks)
                // console.log("dpath", d) fix error in console
                //need to fix error in console then consider
                //adding a 5th quadrant reflecting the direction 
                //maybe 100 square around center
                //extra case
                //may have to rework the formatPath method to include
                //elements in the center
                let path = canv.append("path")
                    .attr("d", d)
                    .attr("stroke", 'rgb(255, 255, 255)')
                    .attr("fill", "none")
                
       
                function circleTransition() {

                    var timeCircle = canv.append("circle")
                        .attr("fill", "white")
                        .attr("r", 4);
                    repeat();

                    function repeat() {
                        timeCircle
                            .attr('cx', 25)      // position the circle at 40 on the x axis
                            .attr('cy', 25)     // position the circle at 250 on the y axis
                            .attr("opacity", 1)
                            .transition()        // apply a transition
                            .duration(3000)      // apply it over 2000 milliseconds
                            .ease(d3.easeLinear)
                            .tween("pathTween", function () { return pathTween(path) })
                            .transition()
                            .duration(100)
                            .attr("opacity", 0)
                            .transition()
                            .duration(200)
                            .ease(d3.easeLinear)
                            .tween("reverseTween", function () { return reverseTween(path) })
                            .on("end", repeat)

                        // console.log(timeCircle)


                        function reverseTween(path) {
                            var length = path.node().getTotalLength();
                            var r = d3.interpolate(length, 0)

                            return function (t) {
                                var point = path.node().getPointAtLength(r(t))
                                d3.select(this)
                                    .attr("cx", point.x)
                                    .attr("cy", point.y)

                            }
                        }
                        function pathTween(path) {
                            var length = path.node().getTotalLength();
                            var r = d3.interpolate(0, length)
                            return function (t) {
                                var point = path.node().getPointAtLength(r(t));
                                d3.select(this)
                                    .attr("cx", point.x)
                                    .attr("cy", point.y)

                            }
                        }
                    };

                };

                circleTransition();

                    
            }   
        }

    }

    formatPath(startPair, tracks) {
        let quarter = Math.floor(tracks.length / 4)
        let half = Math.floor(tracks.length / 2)
        let collection = []
     

        collection.push(`M ${startPair[0]},${startPair[1]}`)
        collection.push(`q ${tracks[quarter][0]},${tracks[quarter][1]}`)
        collection.push(`${tracks[tracks.length - 5][0]},${tracks[tracks.length - 5][1]}`)
        collection.push(`${tracks[tracks.length - 1][0]},${tracks[tracks.length - 1][1]} z`)

        return collection.join(" ")
    }

}

export default Visual