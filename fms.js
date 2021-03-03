// global constants
const WIDTH = 640;
const HEIGHT = 1136;
const BUTTON_DIAMETER = 140;

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
    this.button1 = new Point(1*WIDTH/6, HEIGHT-100);
    this.button2 = new Point(3*WIDTH/6, HEIGHT-100);
    this.button3 = new Point(5*WIDTH/6, HEIGHT-100);
  }
  
  draw() {
    fill('magenta');
    circle(this.button1.x,this.button1.y,BUTTON_DIAMETER);
    circle(this.button2.x,this.button2.y,BUTTON_DIAMETER);
    circle(this.button3.x,this.button3.y,BUTTON_DIAMETER);
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
  background(256);
  state.draw();
}


