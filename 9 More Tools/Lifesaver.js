tool.minDistance = 30;

function onMouseDrag(event) {
  let step = event.delta;
  step.length = step.length / 2.5;

  let outerCircle = new Path.Circle({
    center: event.middlePoint,
    radius: step.length,
    strokeColor: 'black'
  });

  // Change the lineCount to make more lines:
  let lineCount = 12;

  for (let i = 1; i < lineCount; i++) {
    step.angle += 360 / lineCount;

    let line = new Path({
      strokeColor: 'black'
    });
    line.add(event.middlePoint - step);
    line.add(event.middlePoint + step);
  }

  let innerCircle = new Path.Circle({
    center: event.middlePoint,
    radius: step.length / 2,
    strokeColor: 'black',
    fillColor: 'white'
  });
}