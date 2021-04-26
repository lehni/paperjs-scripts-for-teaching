tool.minDistance = 100;

let height = 50;

let down = new Point();
down.angle = 90;
down.length = 100;

let frameThickness = 25;

function onMouseUp(event) {
  let rectangle = new Path({  
    strokeWidth: 10,
    strokeColor: 'black',
    closed: true
  });
  
  rectangle.moveTo(event.downPoint);
  rectangle.lineBy(event.delta);
  rectangle.lineBy(down);
  rectangle.lineBy(-event.delta);
  
  // make a copy of the rectangle and give it a white stroke of 5pt
  let copy = rectangle.clone();
  copy.strokeWidth = 5;
  copy.strokeColor = 'white';

  // make another copy of the rectangle and give it a black stroke of 1pt
  let secondCopy = rectangle.clone();
  secondCopy.strokeWidth = 1;
  secondCopy.strokeColor = 'black';

  let horizontalLine = new Path({
    strokeColor: 'black'
  });
  horizontalLine.strokeWidth = 1;
  horizontalLine.moveTo(event.downPoint + down / 2);
  horizontalLine.lineBy(event.delta);

  let verticalLine = new Path({
    strokeColor: 'black'
  });
  verticalLine.strokeWidth = 1;
  verticalLine.moveTo(event.middlePoint);
  verticalLine.lineBy(down);
}