// This script draws a rectangle using absolute points:
let myPath = new Path();

// Change the path's fill color to black:
myPath.fillColor = 'black';

// Close the path, Paper.js will then connect the first and last segments
// of the path:
myPath.closed = true;

// First we define the points that we will be adding
// to our path later:
let topLeft = new Point(50, 50);
let topRight = new Point(150, 50);
let bottomRight = new Point(150, 250);
let bottomLeft = new Point(50, 250);

// To find out more about Points read the following tutorial:
// http://paperjs.org/tutorials/geometry/point-size-and-rectangle/

// Now we add the points to our path:
myPath.add(topLeft);
myPath.add(topRight);
myPath.add(bottomRight);
myPath.add(bottomLeft);

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