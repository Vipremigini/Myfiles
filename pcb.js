const width = 30;
const height = 20;

setDocDimensions(width, height);


const finalLines = [];


const t = new bt.Turtle()
let p = []
let r = new bt.Turtle()


function expr(h, w, x, y, tur) {
  t.jump([x,y])
  t.setAngle(0)
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
  t.jump([x,y])
  t.setAngle(90)
  for (let i = 0; (i < w / 0.2); i++) {
  
  t.forward(h)
  t.right(90)
  t.forward(0.1)
  t.right(90)
  t.forward(h)
  t.left(90)
  t.forward(0.1)
  t.left(90)
}
}
function pad(r,x,y){
  t.setAngle(0)
  t.jump([x,y-r])
  t.arc(360, r)
  t.goTo([x,(y - r)  + 0.1])
  t.arc(360, r-0.1)
  
   
  }

function rrect(h, w, x, y) {
  t.jump([x,y])
  t.setAngle(0)
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
  t.jump([x,y])
  t.setAngle(90)
  for (let i = 0; (i < w / 0.2); i++) {
  
  t.forward(h)
  t.right(90)
  t.forward(0.1)
  t.right(90)
  t.forward(h)
  t.left(90)
  t.forward(0.1)
  t.left(90)
}
  r.setAngle(0)
  r.jump([x + (w/2) ,y + h - w/2])
  r.arc(360, w/2)
  r.jump([x + (w/2),y+h - w/2 + 0.1])
  r.arc(360, w/2- 0.1)
  r.jump([x + (w/2),y+h - w/2 + 0.2])
  r.arc(360, w/2- 0.2)
  r.jump([x + (w/2),y+h - w/2 + 0.4])
  r.arc(360, w/2- 0.4)

  r.setAngle(0)
  r.jump([x + (w/2) ,y - w/2])
  r.arc(360, w/2)
  r.jump([x + (w/2),y - w/2 + 0.1])
  r.arc(360, w/2- 0.1)
  r.jump([x + (w/2),y - w/2 + 0.2])
  r.arc(360, w/2- 0.2)
  r.jump([x + (w/2),y - w/2 + 0.4])
  r.arc(360, w/2- 0.4)
}
function trace(x1,y1,x2,y2) {
  let tr = [
    [x1-0.0,y1-0.0],
    [x2-0.0,y2-0.0]
  ]
p.push(tr)
 let tr1 = [
   [x2 + 0.0,y2+0.0],
    [x1 + 0.0,y1+0.0]
    ]
  p.push(tr1)
}
rrect(4,1,13,6)
trace(6.731,18.252,6.731,16.129)
trace(6.731,16.129,8.731,14.129)
trace(8.731,14.129,8.731,5.071)
trace(8.731,5.071,8.731,2.251)
trace(14.731,18.252,14.731,16.322)
trace(14.731,16.322,20.628,10.424)
trace(20.628,10.424,25.669,10.424)
trace(25.669,10.424,27.155,10.424)
trace(27.155,10.424,27.574,10.844)
trace(27.574,10.844,27.574,16.983)
trace(27.574,16.983,28.717,18.126)

pad(0.785,26.177,15.585)
pad(0.785,23.637,18.125)
pad(0.785,26.177,18.125)
pad(0.785,28.717,18.125)
pad(0.785,23.637,15.585)
pad(0.785,28.717,15.585)

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
drawLines(r.lines());
