// global constants
const WIDTH = 640;
const HEIGHT = 1136;

// Point Class for storing points
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}



// Class that keeps track of the state of the app
// Ben
class State {
  
  constructor() {
    this.exercise = new Exercise1();
    this.button1 = new Point(WIDTH/4, HEIGHT-100);
    this.button2 = new Point(2*WIDTH/4, HEIGHT-100);
    this.button3 = new Point(3*WIDTH/4, HEIGHT-100);
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
function () {
  createCanvas(500, 500);
  noStroke();
  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255), random(255));
    let size = 100;
    ellipse(random(400)+50, random(400)+50, size, size)
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

