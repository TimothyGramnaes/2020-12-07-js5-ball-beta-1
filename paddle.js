class Paddle {
    constructor() {
        this.width = 120
        this.height = 25
        this.color = color(255)
        this.location = createVector((width / 2) - (this.width / 2), height - 35)
        this.speed = {
            right: createVector(5, 0), //movement-speed 5 i x led och 0 i y
            left: createVector(-5, 0),
            up: createVector(0, -5),
            down: createVector(0, 5)
        }
        this.rotation = {
            tiltLeft: rotate(PI / 2),
            tiltRight: rotate(PI / -2)

        }
    }

    display() {
        fill(this.color);
        rect(this.location.x, this.location.y, this.width, this.height);
    }

    move(direction) {
        this.location.add(this.speed[direction])
    }
}




               /* if(direction === 'right') {
                    this.location.add(this.speed.right)
        
                }
                if (direction === 'left') {
                   // const speed = p5.vector.mult(speed, -1)
                    this.location.add(speed.left)
        
                }
            } */