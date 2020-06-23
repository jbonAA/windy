import Point from './point';

const d3 = require('d3')

class Canvas {
    constructor(quadrants, forecast, h, w) {
        this.quadrants = quadrants;
        this.forecast = forecast;
        this.height = document.getElementById('mapDiv').clientHeight;
        this.width = document.getElementById('mapDiv').clientWidth;
        this.data = [];

        this.appendCanvas()
        this.modelData(100)
    }

    modelData(n) {

        let i = 0

        while(i < n){
            let x = this.getRandomInt(this.width)
            let y = this.getRandomInt(this.height)
            let tempP = this.findAndCreatePoint(x, y, this.findQuadrant(x, y, this.quadrants)) 
            this.data.push(tempP)
            i+=1
        }

        console.log(this.data)

    }

    findQuadrant(x, y, quadObject) {

        switch(x >= 0){
            case x <= this.width / 2:
                if(y <= this.height / 2){
                    return quadObject["0"]
                }else{
                    return quadObject['2']
                }
            case x > this.width / 2:
                if(y <= this.height / 2){
                    return quadObject['1']
                }else{
                    return quadObject['3']
                }
            default:
                return quadObject['0']


        }
    }

    findAndCreatePoint(x, y, quadrantData) {
        console.log(quadrantData)
        const {speed, deg} = quadrantData
        const point = new Point(x, y, speed, deg, 1)
        return point
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    
    appendCanvas() {
        const canv = d3.select("#mapDiv").append('svg')
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("id", "svg")
    }
}

export default Canvas