
/*
let rad = 10; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 3.5; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(60);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(102);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}
*/

let playerScore = 0;
let paddle
let ball

function setup() {
    createCanvas(800, 600);
    paddle = new Paddle();
    
    ball = new Ball(paddle);

}

function draw() {
    background(0);
 
    
    textSize(32);
    text(`Score: ${playerScore}`, width - 150, 50);
    fill(255);

    
    ball.bounceEdge();
    ball.bouncePaddle();

    ball.update();
    
    if (keyIsDown(LEFT_ARROW)) {
        paddle.move('left')
    }
    if (keyIsDown(RIGHT_ARROW)) {
        paddle.move('right')
    }
    if (keyIsDown(UP_ARROW)) {
        paddle.move('up')
    }
    if (keyIsDown(DOWN_ARROW)) {
        paddle.move('down')
    }
    if (keyIsDown(65)) {
        paddle.move('tiltLeft')
    }
    if (keyIsDown(83)) {
        paddle.move('tiltRight')
    }

    paddle.display();
    ball.display();

    drawSprite(paddle);

    
}

