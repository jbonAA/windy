class Canvas {
    constructor(quadrants, forecast, h, w) {
        this.quadrants = quadrants;
        this.forecast = forecast;
        this.height = document.getElementById('mapDiv').clientHeight;
        this.width = document.getElementById('mapDiv').clientWidth;

        // this.appendCanvas()
    }

}

export default Canvas