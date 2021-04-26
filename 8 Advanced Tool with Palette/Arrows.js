////////////////////////////////////////////////////////////////////////////////
// Values

let values = {
  distance: 40,
};

tool.minDistance = values.distance;

////////////////////////////////////////////////////////////////////////////////
// Mouse handling

project.currentStyle.strokeColor = 'black';

function onMouseDrag(event) {
  // Create a vector in the direction of the mouse movement
  let step = event.delta / 3;

  let left = event.middlePoint - step;
  let right = event.middlePoint + step;

  let top = event.middlePoint - step.rotate(90);
  let bottom = event.middlePoint + step.rotate(90);
  
  let arrowLine = new Path();
  arrowLine.add(left);
  arrowLine.add(right);

  let arrowHead = new Path();
  arrowHead.add(top);
  arrowHead.add(right);
  arrowHead.add(bottom);
}

////////////////////////////////////////////////////////////////////////////////
// Interface

let components = {
  distance: {
    label: 'Min Distance',
    steppers: true,
    min: 0,
    onChange: function(value) {
      tool.minDistance = value;
    }
  },
};

let palette = new Palette('Arrows', components, values);