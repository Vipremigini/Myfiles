const width = 30;
const height = 20;

setDocDimensions(width, height);


const finalLines = [];


const t = new bt.Turtle()
const p = new bt.Turtle()

function expr(h, w, x, y, tur) {
  p.setAngle(0)
  p.jump([x,y])
  p.forward(w)
  p.left(90)
  p.forward(h)
  p.left(90)
  p.forward(w)
  p.left(90)
  p.forward(h)
  
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
expr(3.302,3.048,1.143,0.762,p)
expr(3.3,1.2,6.096,0.635,p)
expr(3.3,1.2,10.161,0.635,p)
expr(3.3,1.2,8.128,0.635,p)
expr(3.3,1.2,12.065,0.635,p)
expr(3.3,1.2,14.097,0.635,p)
expr(3.3,1.2,16.129,0.635,p)
expr(3.3,1.2,18.161,0.635,p)
expr(3.3,1.2,20.066,0.635,p)

expr(3.3,1.2,6.096,16.637,p)
expr(3.3,1.2,10.161,16.637,p)
expr(3.3,1.2,8.128,16.637,p)
expr(3.3,1.2,12.065,16.637,p)
expr(3.3,1.2,14.097,16.638,p)
expr(3.3,1.2,16.129,16.637,p)
expr(3.3,1.2,18.161,16.637,p)
expr(3.3,1.2,20.066,16.637,p)

let sc = bt.cut(t.lines(),p.lines())
const xyz = bt.merge(sc,p.lines())
drawLines(xyz);
