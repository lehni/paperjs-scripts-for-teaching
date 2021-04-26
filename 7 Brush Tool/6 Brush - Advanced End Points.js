////////////////////////////////////////////////////////////////////////////////
// This script belongs to the following tutorial:
//
// http://paperjs.org/tutorials/interaction/working-with-mouse-vectors/#adding-brush-stroke-ends

tool.fixedDistance = 15;

let path;
let strokeEnds = 6;

function onMouseDown(event) {
  path = new Path();
  path.fillColor = 'black';
  path.strokeColor = null;
}

let lastPoint;
function onMouseDrag(event) {
  // If this is the first drag event,
  // add the strokes at the start:
  if (event.count == 0) {
    addStrokes(event.middlePoint, -event.delta);
  } else {
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
  }
  path.smooth();
  
  lastPoint = event.middlePoint;
}

function onMouseUp(event) {
  let delta = event.point - lastPoint;
  delta.length = tool.maxDistance;
  addStrokes(event.point, delta);
  path.closed = true;
  path.smooth();
}

function addStrokes(point, delta) {
  let step = delta.rotate(90);
  let strokePoints = strokeEnds * 2 + 1;
  point -= step / 2;
  step /= strokePoints - 1;
  for(let i = 0; i < strokePoints; i++) {
    let strokePoint = point + step * i;
    let offset = delta * (Math.random() * 0.3 + 0.1);
    if (i % 2 == 0) {
      offset *= -1;
    }
    strokePoint += offset;
    path.insert(0, strokePoint);
  }
}