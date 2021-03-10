// global constants
const WIDTH = 640;
const HEIGHT = 1136;
const BUTTON_DIAMETER = 140;

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
    this.button1 = new Point(1*WIDTH/6, HEIGHT-100);
    this.button2 = new Point(3*WIDTH/6, HEIGHT-100);
    this.button3 = new Point(5*WIDTH/6, HEIGHT-100);
  }
  
  draw() {
    
    // menu bar
    fill('magenta');
    circle(this.button1.x,this.button1.y,BUTTON_DIAMETER);
    circle(this.button2.x,this.button2.y,BUTTON_DIAMETER);
    circle(this.button3.x,this.button3.y,BUTTON_DIAMETER);
    
    // text
    textSize(32);
    textAlign(CENTER,CENTER);
    fill(50);
    text(this.exercise.getType(), 0,0,WIDTH,HEIGHT/10)
  }
  
  touch(t) {
    
    // check if the activity needs to be changed
    var i=0;
    for(;i<t.length;i++) {
      let x = t[i].x;
      let y = t[i].y;
      
      // check if the press is near the first button
      if(dist(x,y,this.button1.x,this.button1.y) < BUTTON_DIAMETER/2) {
        this.exercise = new Exercise1();
      }
      
      // check if the press is near the first button
      if(dist(x,y,this.button2.x,this.button2.y) < BUTTON_DIAMETER/2) {
        this.exercise = new Exercise2();
      }
      
      // check if the press is near the first button
      if(dist(x,y,this.button3.x,this.button3.y) < BUTTON_DIAMETER/2) {
        this.exercise = new Exercise3();
      }
    }
  }
}


// the state of exercise 1
// Yuxi
// line / pinching exercise
class Exercise1 {
  
  // gets the string type of the Exercise
  getType() {
    return "Exercise 1";
  }
}

// the state of exercise 2
// Harrison
// foot exercise
class Exercise2 {
  
  // gets the string type of the Exercise
  getType() {
    return "Exercise 2";
  }
}


// the state of exercise 3
// Adrian
class Exercise3 {
  // this function would randomly generate circles which would mimic doorknob
  constructor() {
    var circles = []; 
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
  
  // gets the string type of the Exercise
  getType() {
    return "Exercise 3";
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
  background(256);
  state.draw();
  
  // deep copy the values in touches
  t = JSON.parse(JSON.stringify(touches));
  
  // perform an action for each touch
  state.touch(t);
}
