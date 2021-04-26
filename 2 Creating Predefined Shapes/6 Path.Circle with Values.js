// Creates a circle shaped path

// First we define the center point object and the radius that describe the
// dimensions of the circle
let centerPoint = new Point(150, 100);
let radius = 50;

// Now we use the Path.Circle(point, radius) constructor to create the path item
let myCircle = new Path.Circle(centerPoint, radius);

myCircle.strokeColor = 'black';

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/