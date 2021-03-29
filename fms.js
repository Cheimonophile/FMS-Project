// global constants
var WIDTH = 640;
var HEIGHT = 1136;
const BUTTON_DIAMETER = 140;

// Class that keeps track of the state of the app
// Ben
class State {

  constructor() {
    this.exercise = new Exercise1();
    this.button_size = WIDTH / 6;
    this.button1 = {
      x: 1 * WIDTH / 6,
      y: HEIGHT - (1 * WIDTH / 6)
    };
    this.button2 = {
      x: 3 * WIDTH / 6,
      y: HEIGHT - (1 * WIDTH / 6)
    };
    this.button3 = {
      x: 5 * WIDTH / 6,
      y: HEIGHT - (1 * WIDTH / 6)
    };
  }

  draw() {

    // menu bar
    fill('magenta');
    stroke(1);

    circle(this.button1.x, this.button1.y, this.button_size);
    circle(this.button2.x, this.button2.y, this.button_size);
    circle(this.button3.x, this.button3.y, this.button_size);

    // text
    textSize(32);
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
      if (dist(x, y, this.button1.x, this.button1.y) < this.button_size / 2) {
        this.exercise = new Exercise1();
      }

      // check if the press is near the first button
      if (dist(x, y, this.button2.x, this.button2.y) < this.button_size / 2) {
        this.exercise = new Exercise2();
      }

      // check if the press is near the first button
      if (dist(x, y, this.button3.x, this.button3.y) < this.button_size / 2) {
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
      x: WIDTH / 6,
      y: 1.5 * WIDTH / 6,
    };
    this.circle2 = {
      x: WIDTH - (WIDTH / 6),
      y: HEIGHT - (2.5 * WIDTH / 6),
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
    this.circle_size = 1.2 * WIDTH / 6;
  }
  getType() {
    return "Exercise 1";
  }

  // draw function
  draw() {
    fill('blue');
    circle(this.circle1.x, this.circle1.y, this.circle_size);
    circle(this.circle2.x, this.circle2.y, this.circle_size);
    if (this.gamecompleted) {
      fill(50);
      textSize(64);
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
      if (dist(this.circle1.x, this.circle1.y, t[i].x, t[i].y) < this.circle_size) {
        circle1touched = true;
        this.circle1.x = t[i].x;
        this.circle1.y = t[i].y;
      }
      if (dist(this.circle2.x, this.circle2.y, t[i].x, t[i].y) < this.circle_size) {
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

  }

  // gets the string type of the Exercise
  getType() {
    return "Exercise 2";
  }


  draw() {
    noStroke();
    // x = left/right, y = up/down for ellipse 
    // w = width, h = height



    ellipse(150, 500, 100, 140); // main foot 



    ellipse(500, 500, 100, 140); // main foot

    let b = color(0, 0, 0);
    fill(b);
    noStroke();
    text('Steps', 300, 150);

  }


  touch(t) {
    // this.color = this.color - 4;
    //if (this.color < 0) {

  }
}



// the state of exercise 3
// Adrian
class Exercise3 {
  // this function would randomly generate circles which would mimic doorknob
  constructor() {
    // random location for circles
    this.circles = [];

    while (this.circles.length < 3) {
      // Pick a random circle
      var circle = {
        x: random(WIDTH / 10, 8 * WIDTH / 10),
        y: random(HEIGHT / 8, 6 * HEIGHT / 8),
        r: random(96, 108)
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

    // boolean expression that declares the exercise as not complete 
    this.gameCompletion = false;
    // 
  }

  // gets the string type of the Exercise
  getType() {
    return "Exercise 3";
  }

  // draw function
  draw() {
    // Draw all the circles
    for (var i = 0; i < this.circles.length; i++) {
      fill(255, 210, 247);
      noStroke();
      ellipse(this.circles[i].x, this.circles[i].y, this.circles[i].r * 2, this.circles[i].r * 2);

      if (this.gameCompletion == true) {
        fill(255, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(60);
        textFont("Kristi");
        text('GAME\nOVER', WIDTH / 2, HEIGHT / 2);
      }
    }
  }

  // touch function
  touch(t) {
    var j = 0;
    var secondCounter = 0;

    // check if the press is near the circles 
    for (; j < this.circles.length; j++) {
      var touch = false;

      var i = 0;
      for (; i < t.length; i++) {
        if (dist(this.circles[j].x, this.circles[j].y, t[i].x, t[i].y) < (this.circles[j].r / 2)) {
          secondCounter++;
          fill(218, 255, 210);
          circle(this.circles[j].x, this.circles[j].y, this.circles[j].r * 2);
        }
      }
      if (secondCounter == 3) {
        this.gameCompletion = true;
      }
    }
    fill(50);
    textSize(32);
    text("Circles pressed: " + secondCounter, WIDTH / 2, 2 * HEIGHT / 25);
  }
}





// state object
let state = null;



// setup
// Ben
function setup() {
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
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
