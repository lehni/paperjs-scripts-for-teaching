tool.minDistance = 20;

let path;

function onMouseDown(event) {
  path = new Path({
    strokeColor: 'black',
    strokeCap: 'round',
    strokeJoin: 'round'
  });
  path.add(event.point);
}

function onMouseDrag(event) {
  path.arcTo(event.point);
}

let components = {
  threshold: {
    value: tool.minDistance,
    label: 'Distance Threshold',
    units: 'point',
    onChange: function(value) {
      tool.minDistance = value; 
    } 
  } 
};

let palette = new Palette('Cloud Tool', components);