let stepHeight = 9;
let ladderWidth = 5;

// Change the current style settings of the document,
// so all paths after this point inherit these styles:
project.currentStyle = {
  strokeColor: 'black',
  strokeWidth: 2,
  strokeCap: 'round'
};

function onMouseUp(event) {
  let horizontal = event.delta.clone();
  horizontal.angle -= 45;
  horizontal.length = ladderWidth;

  let bottomLeft = event.downPoint - horizontal;
  let bottomRight = event.downPoint + horizontal;

  let leftPole = new Path();
  leftPole.moveTo(bottomLeft);
  leftPole.lineBy(event.delta);

  let rightPole = new Path();
  rightPole.moveTo(bottomRight);
  rightPole.lineBy(event.delta);

  let stepCount = event.delta.length / stepHeight;
  let stepVector = event.delta.clone();
  stepVector.length = stepHeight;

  for(let i = 1; i < stepCount; i++) {
    let stepPath = new Path();
    stepPath.add(bottomLeft + stepVector * i);
    stepPath.add(bottomRight + stepVector * i);
  }
}