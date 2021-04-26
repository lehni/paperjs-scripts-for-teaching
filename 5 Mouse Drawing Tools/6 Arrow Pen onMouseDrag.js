tool.minDistance = 30;

function onMouseDrag(event) {
  let offset = event.lastPoint;

  // See what happens when you change 'new Point(1, 0)' to 'event.delta'!
  let horizontal = new Point(1, 0); // event.delta
  horizontal.length = 1;
  
  let vertical = horizontal.rotate(90);

  let arrow = new Path({
    strokeColor: 'black',
    closed: true
  });

  //   *
  //
  arrow.add(offset);

  //   *
  //   |
  //   |
  //   |
  //
  arrow.lineBy(vertical * 5);

  //   -------*
  //   |
  //   |
  //   |
  //
  arrow.lineBy(horizontal * (event.delta.length - 20));

  //          *
  //          |
  //   ------- 
  //   |       
  //   |       
    //   |
  //
  arrow.lineBy(vertical * 5);

  //          |\
  //   -------  \
  //   |         *
  //   |
  //   |
  //
  arrow.lineBy(horizontal * 7.5 - vertical * 7.5);

  //          |\
  //   -------  \
  //   |         \
  //   |         /
  //   |        /
  //           /
    //          *
  //
  arrow.lineBy(horizontal * -7.5 - vertical * 7.5);

  //          |\
  //   -------  \
  //   |         \
  //   |         /
  //          * /
  //          |/
  //
  arrow.lineBy(vertical * 5);

  //          |\
  //   -------  \
  //   |         \
  //   |         /
  //   -------  /
  //          |/
  //
  arrow.closed = true;
}