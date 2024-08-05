const width = 125;
const height = 125;

setDocDimensions(width, height);


const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];

finalLines.push(polyline);

let t = new bt.Turtle()
let p = new bt.Turtle()

function expr(h, w, x, y, tur) {
tur.setAngle(0)
  tur.goTo([x,y])
  tur.forward(w)
  tur.left(90)
  tur.forward(h)
  tur.left(90)
  tur.forward(w)
  tur.left(90)
  tur.forward(h)
  
}

for (let i = 0; i < 625; i++) {
  t.forward(125)
  t.left(90)
  t.forward(0.1)
  t.left(90)
  t.forward(125)
  t.right(90)
  t.forward(0.1)
  t.right(90)
}
expr(20,20,0,0,p)
expr(20,20,97,105,p)

// draw it
drawLines(bt.cut(t.lines(),p.lines()));
