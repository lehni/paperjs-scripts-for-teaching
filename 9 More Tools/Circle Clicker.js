function onMouseDown(event) {
  // Create two circles at the point where the mouse was clicked
  // One with a radius of 10 points, and one with a radius of 2 points
  new Path.Circle({
    center: event.point,
    radius: 10,
    strokeColor: 'black'
  });
  new Path.Circle({
    center: event.point,
    radius: 2,
    strokeColor: 'black'
  });

  // Only execute the following if this is at least the second time
  // the user has clicked:
  if (event.lastPoint != event.point) {
    // Create a vector in the direction of the mouse movement
    // with a length of 10:
    let step = event.delta;
    step.length = 10;

    let path = new Path({
      strokeColor: 'black'
    });
    path.add(event.lastPoint + step);
    
    step.length = 2;
    path.add(event.point - step);
  }
}