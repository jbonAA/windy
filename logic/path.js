class Path {
    constructor(cp, pos, speed){
        this.tracks = cp;
        this.start = pos;
        this.coords = [];
        this.speed = speed

        this.formatCoords(this.start, this.tracks)
        //where the element will be created and attributed before added
    }


    formatCoords(start, track) {
        this.coords.push({x: start[0], y: start[1]})
        track.forEach((el) => {
            this.coords.push({x: el[0], y: el[1]})
        })
    }   

}

export default Path