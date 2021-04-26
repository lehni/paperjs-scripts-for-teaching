////////////////////////////////////////////////////////////////////////////////
// Values

tool.minDistance = 10;

let values = {
  curviness: 0.5,
  distance: tool.minDistance,
  offset: 10,
  mouseOffset: true
};

////////////////////////////////////////////////////////////////////////////////
// Mouse handling

let path;
function onMouseDown(event) {
  path = new Path();
  path.strokeColor = 'black';
}

function onMouseDrag(event) {
  let step = event.delta.clone();
  
  if (!values.mouseOffset)
    step.length = values.offset;
  
  let mul = 1;
  
  if (event.count % 2 == 0) {
    mul = -1;
  }

  step.angle += 90 * mul;

  path.add(event.point + step);
  path.smooth();
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
  mouseOffset: {
    label: 'Dynamic size',
    onChange: function(checked) {
      palette.components.offset.enabled = !checked;
    }
  },
  offset: {
    label: 'Size',
    min: 0,
    enabled: false
  }
};

let palette = new Palette('Wave', components, values);