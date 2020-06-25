const ref = (d) => {
    switch(d >= 0){
        case(d <= 10):
            return "N"
        case(d <= 30):
            return "NNE"
        case(d <= 60):
            return "NE"
        case(d <= 80):
            return "ENE"
        case(d <= 100):
            return "E"
        case(d <= 120):
            return "ESE"
        case(d <= 150):
            return "SE"
        case(d <= 170):
            return "SSE"
        case(d <= 190):
            return "S"
        case(d <= 210):
            return "SSW"
        case(d <= 240):
            return "SW"
        case(d <= 260):
            return "WSW"
        case(d <= 280):
            return "W"
        case(d <= 300):
            return "WNW"
        case(d <= 330):
            return "NW"
        case(d <= 350):
            return "NNW"
        default:
            return "N"
    }
}

export default ref
