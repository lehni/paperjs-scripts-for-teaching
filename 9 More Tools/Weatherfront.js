tool.fixedDistance = 15;

let values = {
  evenColor: 'red',
  oddColor: 'black'
};

function onMouseDrag(event) {
  let horizontal = event.delta.clone();
  horizontal.length = 5;

  let vertical = horizontal.rotate(90);

  let left = event.middlePoint - horizontal;
  let right = event.middlePoint + horizontal;
  let top = event.middlePoint - vertical;
  
  let triangle = new Path();

  // You can add multiple points in one go:
  triangle.add(left, top, right);
  triangle.closed = true;

  if (event.count % 2 == 1) {
    triangle.strokeColor = null;
    triangle.fillColor = values.evenColor;
  } else {
    triangle.strokeColor = values.oddColor;
    triangle.fillColor = null;
  }
}

let components = { 
  evenColor: {
    type: 'color', label: 'Even Color'
  },
  oddColor: {
    type: 'color', label: 'Odd Color'
  },
};

let palette = new Palette('Weatherfront', components, values);