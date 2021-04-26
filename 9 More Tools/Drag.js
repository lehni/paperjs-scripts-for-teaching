tool.fixedDistance = 30;

let height = 30;

// A vector pointing 90 degrees down:
let down = new Point();
down.angle = 90;
down.length = height;

function onMouseDrag(event) {
  let frame = new Path({
    fillColor: 'white',
    strokeColor: 'black',
    strokeWidth: 2,
    closed: true
  });

  frame.moveTo(event.lastPoint);
  frame.lineBy(down);
  frame.lineBy(event.delta);
  // Go up by negating the down vector:
  frame.lineBy(-down);

  let horizontalLine = new Path({
    strokeColor: 'black'
  });
  horizontalLine.moveTo(event.lastPoint + down / 2);
  horizontalLine.lineBy(event.delta);
  
  let verticalLine = new Path({
    strokeColor: 'black'
  });
  verticalLine.moveTo(event.middlePoint);
  verticalLine.lineBy(down);
}