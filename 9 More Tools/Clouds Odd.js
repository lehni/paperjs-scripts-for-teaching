tool.minDistance = 10;

let path;

function onMouseDown(event) {
  path = new Path({
    strokeColor: 'black',
    strokeCap: 'round',
    strokeJoin: 'round'
  });
  path.moveTo(event.point);
}

function onMouseDrag(event) {
  path.arcTo(event.point, event.count % 2 == 0);
}

let components = {
  threshold: {
    value: tool.minDistance,
    type: 'number', label: 'Distance Threshold',
    onChange: function(value) {
      tool.minDistance = value; 
    } 
  } 
};

let palette = new Palette('Cloud Tool', components);