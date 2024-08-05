const width = 30;
const height = 20;

setDocDimensions(width, height);


const finalLines = [];


const t = new bt.Turtle()
let p = []

function expr(h, w, x, y, tur) {
  t.jump([x,y])
  for (let i = 0; (i < h / 0.2); i++) {
  t.forward(w)
  t.left(90)
  t.forward(0.1)
  t.left(90)
  t.forward(w)
  t.right(90)
  t.forward(0.1)
  t.right(90)
}
}
function pad(r,x,y){
  t.jump([x,y-r])
  t.arc(360, r)
  t.goTo([x,(y - r)  + 0.1])
  t.arc(360, r-0.1)
  t.goTo([x,(y - r)  + 0.2])
  t.arc(360, r-0.2)
   
  }


function trace(x1,y1,x2,y2) {
  let tr = [
    [x1,y1],
    [x2,y2]
  ]
p.push(tr)
 let tr1 = [
    [x1 - 0.3,y1],
    [x2 - 0.3,y2]
  ]
  p.push(tr1)
}

trace(3,2,24,15)
pad(0.785,24,18)
pad(1,27,18)
pad(0.5,24,15)
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

//let sc = bt.cut(t.lines(),p.lines())
//const xyz = bt.merge(sc,p.lines())
drawLines(t.lines());
drawLines(p);
