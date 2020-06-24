import {quadtree} from 'd3-quadtree'

class Simulation {
    constructor(w, h, center, data) {
        this.width = w;
        this.height = h;
        this.center = center;
        this.data = data;
    }

    tick() {
        const quadtree = d3.quadtree()
            .x(d => d.pos[0])
            .y(d => d.pos[1])
            .extent([-1, -1], [this.width + 1, this.height + 1])
            .addAll(this.data)

        for(let i = 0, l = this.data.length; i < l; i++) {
            const node = this.data[i]

            const r = node.radius;
                nx1 = node.pos[0] - r
                nx2 = node.pos[0] + r
                ny1 = node.pos[1] - r
                ny2 = node.pos[1] + r

            quadtree.visit((visited, x1, y1, x2, y2) => {
                if(visited.data && visited.data.index !== node.index){
                    if(geometric.linelength([node.pos, visited.data.pos]) < node.radius + visited.data.radius) {
                        node.speed = 0
                    }
                }

                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            })

            //detect sides
            const wallVertical = node.pos[0] <= node.radius || node.pos[0] >= this.width - node.radius,
            wallHorizontal = node.pos[1] <= node.radius || node.pos[1] >= this.height - node.radius

            if(wallVertical || wallHorizontal){
                node.speed = 0
            }
        }

    }

    drawSimulation() {
        const wrapper = document.getElementById("simulation")
    }
}

export default Simulation

