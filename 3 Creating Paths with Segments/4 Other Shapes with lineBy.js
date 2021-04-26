// This script introduces shows a more complex drawing
// using the lineBy and arcBy functions:

let myPath = new Path({
  fillColor: 'black',
  closed: true
});

// Define the points and vectors as actual point objects, since we want to
// perform vector algebra with them further down. Only real point objects hold
// the properties and methods to do so, simple point arrays won't suffice here.
let start = new Point(150, 50);

let right = new Point(100, 0);
let left = new Point(-100, 0);
let up = new Point(0, -100);
let down = new Point(0, 100);

myPath.add(start);

// This draws an arc from the last point by {x: 0, y: 100}
// using the arcBy(end, clockwise) function. We pass 'false' for
// the clockwise parameter, to make the arc draw in a counter-clockwise
// direction:
myPath.arcBy(down, false);

// Draw a line from the last point by the x and y values specified in 'right':
myPath.lineBy(right);

// Here we multiply down by three, this means we're moving by
// {x: 0, y: 100} * 3 = {x: 0, y: 300}:
myPath.lineBy(down * 3);

myPath.arcBy(right, false);

myPath.lineBy(up * 3);

myPath.lineBy(right);

myPath.arcBy(up, false);

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Find out more about Point objects and other basic types:
// http://paperjs.org/tutorials/geometry/point-size-and-rectangle/
//
// Find out more about adding points to a path:
// http://paperjs.org/tutorials/paths/working-with-path-items/
//
// Find out more on using color and style:
// http://paperjs.org/tutorials/paths/using-color-and-style/