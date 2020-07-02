import Point from './point';
import Simulation from './simulation';
import Path from './path';
import Visual from './visual';

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

        this.modelData(30)
    }

    drawBezierCurves(points) {
        let datum = [];

        points.forEach((point) => {
            datum.push(new Path(point.controlPoints, point.pos))
        })

        let newVis = new Visual(datum)

        newVis.visInit(this.width, this.height)
    }

    //format el point to path by extrapolating xy pairs

    modelData(n) {

        let i = 0

        while(i < n){
            let x = this.getRandomInt(this.width)
            let y = this.getRandomInt(this.height)
            let tempP = this.findAndCreatePoint(x, y, this.findQuadrant(x, y, this.quadrants)) 
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
        //after the data is modeled we should start simulation
        simulation.data = this.data
        this.sim = simulation
        
        // simulation.drawSimulation()

        this.drawBezierCurves(this.data)

    }
    //data modeling
    findQuadrant(x, y, quadObject) {

        switch(x >= 0){
            case x <= this.width / 2 + 50:
                if(y < this.height / 2 - 50){
                    return quadObject["0"]
                }else if(y >this.height / 2 + 50){
                    return quadObject['2']
                }else{
                    return quadObject['current']
                }
            case x > this.width / 2 - 50:
                if(y <= this.height / 2 - 50){
                    return quadObject['1']
                }else if(y >= this.height / 2 + 50){
                    return quadObject['3']
                }else{
                    return quadObject['current']
                }
            default:
                return quadObject['current']
        }

    }



    findAndCreatePoint(x, y, quadrantData) {
        const {speed, deg} = quadrantData
        const point = new Point(x, y, speed, deg, 1, this.width, this.quadrants)

        return point
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //data modeling
    
   

}

export default Canvas