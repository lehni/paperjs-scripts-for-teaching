let mySquare = new Path({
  fillColor: 'black',
  closed: true
});

// Define the starting point as a point array
let start = [50, 50];

// Define the drawing directions as vector arrays
let down = [0, 100];
let right = [100, 0];
let up = [0, -100];

// Add the starting point to our path:
mySquare.add(start);

// From the last point, draw a line by {x: 0, y: 100}:
mySquare.lineBy(down);

// From the last point, draw a line by {x: 100, y: 0}:
mySquare.lineBy(right);

// From the last point, draw a line by {x: 0, y: -100}:
mySquare.lineBy(up);
