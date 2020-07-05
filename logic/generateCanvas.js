import Point from './point';
import Simulation from './simulation';
import Path from './path';
import Visual from './visual';

import findQuadrant from '../logic/findQuadrant';

const d3 = require('d3')

class Canvas {
    constructor(quadrants, forecast, h, w) {
        this.quadrants = quadrants;
        this.forecast = forecast;
        this.height = document.getElementById('mapDiv').clientHeight;
        this.width = document.getElementById('mapDiv').clientWidth;
        this.center = [this.width / 2, this.height / 2];
        this.data = [];
        this.sim = {};
        this.pathDataSets = [];

        this.modelData(100)
    }

    drawBezierCurves(points) {
        let datum = [];

        points.forEach((point) => {
            datum.push(new Path(point.controlPoints, point.pos, point.speed))
        })

        let newVis = new Visual(datum)

        newVis.visInit(this.width, this.height)
    }

    //format el point to path by extrapolating xy pairs data modeling

    modelData(n) {
        let i = 0

        while(i < n){
            let x = this.getRandomInt(this.width)
            let y = this.getRandomInt(this.height)
            let quad = findQuadrant(x, y, this.width, this.height, this.quadrants)
            let tempP = this.findAndCreatePoint(x, y, quad) 
            this.data.push(tempP)
            i+=1
        }

        for(let j = 0; j < this.data.length; j++){
            let point = this.data[j];
            let [x, y] = [point.pos[0], point.pos[1]]


            point.populateControlPoints(x, y, 0)
            point.endPoint = point.controlPoints.pop()
        }

        const simulation = new Simulation(this.width, this.height, this.center, this.data)
        simulation.data = this.data
        this.sim = simulation
        this.drawBezierCurves(this.data)

    }



    findAndCreatePoint(x, y, quadrantData) {
        const {speed, deg} = quadrantData
        const point = new Point(x, y, speed, deg, 1, this.width, this.height, this.quadrants)

        return point
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //data modeling
    
   

}

export default Canvas