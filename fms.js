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
function setup() {
  line(30,30,350,350);
  circle(30,30,20);
  circle(350,350,20)
}
let value = 255;
function draw() {
  fill(value);
  noStroke();
  circle(160,160,20)
}
function touchMoved() {
  value = value - 4;
  if (value < 0) {
    value = 255;
  }
}


// the state of exercise 3
// Adrian
class Exercise3 {}


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


