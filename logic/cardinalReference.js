//11, 23, 23, 23, 23, 

const ref = (d) => {
    switch(d >= 0){
        case(d <= 11.25):
            return "N"
        case (d <= 33.75):
            return "NNE"
        case (d <= 56.25):
            return "NE"
        case (d <= 78.75):
            return "ENE"
        case (d <= 101.25):
            return "E"
        case (d <= 123.75):
            return "ESE"
        case (d <= 146.25):
            return "SE"
        case (d <= 168.75):
            return "SSE"
        case (d <= 191.75):
            return "S"
        case (d <= 213.75):
            return "SSW"
        case (d <= 236.25):
            return "SW"
        case (d <= 258.75):
            return "WSW"
        case(d <= 281.25):
            return "W"
        case (d <= 303.75):
            return "WNW"
        case (d <= 326.25):
            return "NW"
        case(d <= 348.75):
            return "NNW"
        default:
            return "N"
    }
}

export default ref
