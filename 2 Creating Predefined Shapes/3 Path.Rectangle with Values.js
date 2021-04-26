// Create a rectangle shaped path defined by two points

// First we define the two points that describe the dimensions of the rectangle
let point1 = new Point(200, 50);
let point2 = new Point(50, 100);

// Now we use the Path.Rectangle(point1, point2) constructor to create the path
let myRectangle = new Path.Rectangle(point1, point2);

myRectangle.strokeWidth = 5;
myRectangle.strokeColor = 'yellow';
myRectangle.fillColor = '#00FF3C';

////////////////////////////////////////////////////////////////////////////////
// Create a rectangle shaped path defined by a point and a size

// First we define the point and size objects that describe the dimensions of
// the rectangle
let myPoint = new Point(150, 100);
let mySize = new Size(70, 100);

// Now we use the Path.Rectangle(point, size) constructor to create the path
let myOtherRectangle = new Path.Rectangle(myPoint, mySize);

myOtherRectangle.strokeColor = 'black';

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/