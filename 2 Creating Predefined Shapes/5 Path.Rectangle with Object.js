// Alternatively, we can use the more semantic object notations for points and
// Path.Rectangle constructor:

let myRectangle = new Path.Rectangle({
  from: [200, 50],
  to: [50, 100],
  strokeWidth: 5,
  strokeColor: 'yellow',
  fillColor: '#00FF3C'
});

let myOtherRectangle = new Path.Rectangle({
  point: [150, 100],
  size: [70, 100],
  strokeColor: 'black'
});

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/