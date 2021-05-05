////////////////////////////////////////////////////////////////////////////////
// This script belongs to the following tutorial:
//
// http://paperjs.org/tutorials/interaction/working-with-mouse-vectors/#smoothing-coloring

tool.minDistance = 15;
tool.maxDistance = 45;

let path;

function onMouseDown(event) {
  path = new Path();
  path.fillColor = 'red';

  path.add(event.point);
}

function onMouseDrag(event) {
  let step = event.delta / 2;
  step.angle += 90;
  
  // The top point: the middle point + the step rotated by 90 degrees:
  //   -----*
  //   |
  //   ------
  let top = event.middlePoint + step;
  
  // The bottom point: the middle point - the step rotated by 90 degrees:
  //   ------
  //   |
  //   -----*
  let bottom = event.middlePoint - step;
  
  path.add(top);
  path.insert(0, bottom);
  path.smooth();
}

function onMouseUp(event) {
  path.add(event.point);
  path.closed = true;
  path.smooth();
}