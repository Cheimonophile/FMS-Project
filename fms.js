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
    this.button1 = new Point(1 * WIDTH / 6, HEIGHT - 100);
    this.button2 = new Point(3 * WIDTH / 6, HEIGHT - 100);
    this.button3 = new Point(5 * WIDTH / 6, HEIGHT - 100);
  }

  draw() {

    // menu bar
    fill('magenta');
    stroke(1);

    circle(this.button1.x, this.button1.y, BUTTON_DIAMETER);
    circle(this.button2.x, this.button2.y, BUTTON_DIAMETER);
    circle(this.button3.x, this.button3.y, BUTTON_DIAMETER);

    // text
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(50);
    text(this.exercise.getType(), WIDTH / 2, HEIGHT / 20);
    text('Exercise\n1', this.button1.x, this.button1.y);
    text('Exercise\n2', this.button2.x, this.button2.y);
    text('Exercise\n3', this.button3.x, this.button3.y);

    // draw the exercise
    this.exercise.draw();
  }

  touch(t) {

    // check if the activity needs to be changed
    var i = 0;
    for (; i < t.length; i++) {
      let x = t[i].x;
      let y = t[i].y;

      // check if the press is near the first button
      if (dist(x, y, this.button1.x, this.button1.y) < BUTTON_DIAMETER / 2) {
        this.exercise = new Exercise1();
      }

      // check if the press is near the first button
      if (dist(x, y, this.button2.x, this.button2.y) < BUTTON_DIAMETER / 2) {
        this.exercise = new Exercise2();
      }

      // check if the press is near the first button
      if (dist(x, y, this.button3.x, this.button3.y) < BUTTON_DIAMETER / 2) {
        this.exercise = new Exercise3();
      }
    }

    // call the touch method on the exercise
    this.exercise.touch(t);
  }
}


// the state of exercise 1
// Yuxi
// line pinching exercise
class Exercise1 {

  // gets the string type of the Exercise
  constructor() {
    this.circle1 = {
      x: 100,
      y: 200
    };
    this.circle2 = {
      x: WIDTH - 100,
      y: HEIGHT - 300
    };
    this.circle1origin = {
      x: this.circle1.x,
      y: this.circle1.y
    };
    this.circle2origin = {
      x: this.circle2.x,
      y: this.circle2.y
    };
    this.gamecompleted = false;
  }
  getType() {
    return "Exercise 1";
  }

  // draw function
  draw() {
    fill('blue');
    circle(this.circle1.x, this.circle1.y, 100);
    circle(this.circle2.x, this.circle2.y, 100);
    if (this.gamecompleted) {
      fill(50);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Good Job!", WIDTH / 2, HEIGHT / 2);
    }
  }

  // touch function
  touch(t) {
    var circle1touched = false;
    var circle2touched = false;
    var i = 0;
    
    for (; i < t.length; i++) {
      if (dist(this.circle1.x, this.circle1.y, t[i].x, t[i].y) < 50) {
        circle1touched = true;
        this.circle1.x = t[i].x;
        this.circle1.y = t[i].y;
      }
      if (dist(this.circle2.x, this.circle2.y, t[i].x, t[i].y) < 50) {
        circle2touched = true;
        this.circle2.x = t[i].x;
        this.circle2.y = t[i].y;
      }
    }
    
    if (!circle1touched) {
      this.circle1 = {
        x: this.circle1origin.x,
        y: this.circle1origin.y
      };
    }
    
    if (!circle2touched) {
      this.circle2 = {
        x: this.circle2origin.x,
        y: this.circle2origin.y
      };
    }
    
    if (dist(this.circle1.x, this.circle1.y, this.circle2.x, this.circle2.y) < 100) {
      this.gamecompleted = true;
    }
  }


}


// the state of exercise 2
// Harrison
// foot exercise
class Exercise2 {

  // constructor
  constructor() {
    this.color = 255;
  }

  // gets the string type of the Exercise
  getType() {
    return "Exercise 2";
  }


  draw() {
    fill(this.color);
    noStroke();
    circle(160, 160, 20)
  }


  touch(t) {
    this.color = this.color - 4;
    if (this.color < 0) {
      this.color = 255;
    }
  }
}


// the state of exercise 3
// Adrian
class Exercise3 {
  // this function would randomly generate circles which would mimic doorknob
  constructor() {
    this.circles = [];

    for (var i = 0; i < 10; i++) {
      // Pick a random circle
      var circle = {
        x: random(WIDTH - 0),
        y: random(HEIGHT / 10, 8 * HEIGHT / 10),
        r: random(12, 36)
      };

      // Does it overlap any previous circles?
      var overlapping = false;
      for (var j = 0; j < this.circles.length; j++) {
        var other = this.circles[j];
        var d = dist(circle.x, circle.y, other.x, other.y);
        if (d < circle.r + other.r) {
          overlapping = true;
        }
      }

      // If not keep it!
      if (!overlapping) {
        this.circles.push(circle);
      }
    }
  }

  // gets the string type of the Exercise
  getType() {
    return "Exercise 3";
  }

  // draw function
  draw() {
    // Draw all the circles
    for (var i = 0; i < this.circles.length; i++) {
      fill(255, 0, 175, 100);
      noStroke();
      ellipse(this.circles[i].x, this.circles[i].y, this.circles[i].r * 2, this.circles[i].r * 2);
    }
  }

  // touch function
  touch(t) {}
}





// state object
let state = null;



// setup
// Ben
function setup() {
  createCanvas(WIDTH, HEIGHT);

  // init state
  state = new State();
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
