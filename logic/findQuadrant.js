const findQuadrant = (x, y, width, height, quadObject) => {

    switch (x >= 0) {
        case x <= width / 2 + 50:
            if (y < height / 2 - 50) {
                return quadObject["0"]
            } else if (y > height / 2 + 50) {
                return quadObject['2']
            } else {
                return quadObject['current']
            }
        case x > width / 2 - 50:
            if (y <= height / 2 - 50) {
                return quadObject['1']
            } else if (y >= height / 2 + 50) {
                return quadObject['3']
            } else {
                return quadObject['current']
            }
        default:
            return quadObject['current']
    }


}

export default findQuadrant