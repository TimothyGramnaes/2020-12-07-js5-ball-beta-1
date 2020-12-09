class Ball {
    constructor(paddle) {
        this.radius = 15
        this.size = this.radius * 2;
        this.location = createVector(paddle.location.x + (paddle.width / 2), paddle.location.y - this.radius -5)
        this.color = color(128, 0, 128);
        this.velocity = createVector(5, -5)
        this.paddle = paddle;
    }

   

    bouncePaddle() {
        // we are within the width of the paddle
        // if (this.location.x + this.radius >= this.paddle.location.x &&
        //     this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {
        //         if (this.location.y + this.radius > this.paddle.location.y) {
        //             this.velocity.y *= -1;
        //            // this.location.y = this.paddle.location.y - this.radius - 1;
        //         }
        //     }
         ball.bounce(paddle);

    }

    // function collision() {
        

    // }

    bounceEdge() {
        // Check right edge
        if(this.location.x + this.radius >= width) { // Check right edge
            this.velocity.x *= -1
        } else if(this.location.x - this.radius <= 0) { // Check left edge
            this.velocity.x *= -1
        } else if(this.location.y - this.radius <= 0) { // check the top
            this.velocity.y *= -1
       // } else if(this.location.y + this.radius >= width) { // check the Bottom
        //    this.velocity.y *= -1
       }

    }

    display() {
        fill(this.color)
        ellipse(this.location.x, this.location.y, this.size, this.size);
        createSprite(this.location.x, this.location.y, this.size, this.size)
    }

    update() {
        this.location.add(this.velocity);
    }
}