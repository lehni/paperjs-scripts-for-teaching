let startPoint = new Point(100, 100);
let vector = new Point(100, 0);
let angle = 90;
let increase = 0;

let myPath = new Path();
myPath.closed = true;
myPath.fillColor = 'red';

myPath.moveTo(startPoint);

myPath.lineBy(vector);

vector.angle += angle;
vector.length += increase;
myPath.lineBy(vector);

vector.angle += angle;
vector.length += increase;
myPath.lineBy(vector);