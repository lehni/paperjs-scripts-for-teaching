// This tool draws a line while you drag the mouse, and places circle shaped
// paths on it:

// minDistance: the minimum distance the mouse has to drag
// before firing the onMouseDrag event, since the last onMouseDrag event
tool.minDistance = 10;

let line;

function onMouseDown(event) {
  // Create the line when the user clicks
  line = new Path({
    strokeColor: 'black'
  });
  
  // Add the point where the mouse was pressed to the path:
  line.add(event.point);
}

// The onMouseDrag handler is called every time the mouse is dragged
// more then 10 points:
function onMouseDrag(event) {
  // event.middlePoint describes the point in the middle between
  // event.lastPoint and event.point.
  line.add(event.middlePoint);

  // Create a circle at event.middlePoint with a radius of 3:
  let circlePath = new Path.Circle({
    center: event.middlePoint,
    radius: 3,
    fillColor: 'white',
    strokeColor: 'black'
  });
}

////////////////////////////////////////////////////////////////////////////////
// Further Reading:
//
// Read more about creating mouse tools:
// http://paperjs.org/tutorials/interaction/creating-mouse-tools/
//
// Read more about event.point & event.downPoint and other mouse event
// properties:
// http://paperjs.org/tutorials/interaction/mouse-tool-events/#mouse-position
//
// Read more about creating predefined shapes in the following tutorial:
// http://paperjs.org/tutorials/paths/creating-predefined-shapes/