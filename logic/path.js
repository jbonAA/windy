class Path {
    constructor(cp, pos){
        this.tracks = cp;
        this.start = pos;
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

}

export default Path