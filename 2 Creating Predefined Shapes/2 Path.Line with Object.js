// Alternatively, we can use the more semantic object notations for points and
// Path.Line constructor:

// The points can be described as arrays as long as they are passed on to
// constructors and functions where their purpose as points is known:
let point1 = [200, 50];
let point2 = [50, 100];

// Now we can use the object constructor where each argument is named,
// making the call more semantic and readable.
let myLine = new Path.Line({
  from: point1,
  to: point2,
  strokeColor: 'black'
});

// We could even move the point definitions right into this call:
let myOtherLine = new Path.Line({
  from: [300, 50],
  to: [150, 100],
  strokeColor: 'red'
});

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/