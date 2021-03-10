// global constants
const WIDTH = 640;
const HEIGHT = 1136;

// Point Class for storing points
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}



// Class that keeps track of the state of the app
// Ben
class State {

  constructor() {
    this.exercise = new Exercise1();
    this.button1 = new Point(WIDTH / 4, HEIGHT - 100);
    this.button2 = new Point(2 * WIDTH / 4, HEIGHT - 100);
    this.button3 = new Point(3 * WIDTH / 4, HEIGHT - 100);
  }
}


// the state of exercise 1
// Harrison
class Exercise1 {}

// the state of exercise 2
// Yuxi
class Exercise2 {}

// the state of exercise 3
// Adrian
class Exercise3 {
  // this function would randomly generate circles which would mimic doorknob
  constructor() {
    var circles = []; 
    this.exercise03 = new Exercise3(); 
    this.button1 = new Point(1*WIDTH/6, HEIGHT-100);
    this.button2 = new Point(3*WIDTH/6, HEIGHT-100);
    this.button3 = new Point(5*WIDTH/6, HEIGHT-100);
  }

   circles() {
    for (var i = 0; i < 10; i++) {
      var circle = {
        x: random(width),
        y: random(height),
        r: random(12, 36)
      };

      var overlapping = false;

      for (var j = 0; j < circles.length; j++) {
        var other = circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }

      for (var k = 0; k < circles.length; k++) {
        fill(255, 0, 150, 100);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
      }

      if (!overlapping) {
        circles.push(circle);
      }
    }
  }
}


// state object
let state = new State();

// setup
// Ben
function setup() {
  createCanvas(WIDTH, HEIGHT);
}


// draw
// Ben
function draw() {
  background(220);
}
