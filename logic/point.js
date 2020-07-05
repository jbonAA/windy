
import ref from '../logic/cardinalReference';
import findQuadrant from '../logic/findQuadrant';

const cardinalSlopes = {
    //top left is 0, 0
    //bottom right is max, max
    "N": [0, 20],
    "NNW": [5, 15],
    "NW": [10, 10],
    "WNW": [15, 5],
    "W": [20, 0],
    "WSW": [15, -5],
    "SW": [10, -10],
    "SSW": [5, -15],
    "S": [0, -20],
    "SSE": [-5, -15],
    "SE": [-10, -10],
    "ESE": [-15, -5],
    "E": [-20, 0],
    "ENE": [-15, 5],
    "NE": [-10, 10],
    "NNE": [-5, 15]


}

class Point {
    constructor(x, y, speed, dir, radius, canvasWidth, canvasHeight, quadrants){
        this.pos = [x, y]
        this.speed = speed;
        this.angle = dir;
        this.radius = radius;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.quadrants = quadrants

        //control points should be an array of xy coords

        this.controlPoints = []
        this.endPoint = [];
    }

    outOfBounds(x, y) {

        if(x >= this.canvasWidth || x < 0){
            return true
        }

        if(y >= this.canvasWidth || y < 0){
            return true
        }

        return false
    }


    populateControlPoints(x, y, modifier) {

        let quad = findQuadrant(x, y, this.canvasWidth, this.canvasHeight, this.quadrants)
        //speed as magnitude will need to play with coeff
        let n = ref(quad.deg)
        let m = cardinalSlopes[n]


        let [x2, y2] = [Math.floor(m[0] + x), Math.floor(m[1] + y)]


        if(this.outOfBounds(x2, y2) || modifier === 30){
            return;
        }else{
            this.controlPoints.push([x2, y2])
            this.populateControlPoints(x2, y2, modifier + 1)
        }

        
    }

}

export default Point