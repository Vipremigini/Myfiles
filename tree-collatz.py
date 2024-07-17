import turtle

def collatzer(y,listac):
    global listc
    if y == 0:
        return
    elif y == 1:
        return listac
    elif y % 2 == 0:
        y = int(y / 2)
        listc.append(y)
        
        collatzer(y,listac)
    else:
        y = (y * 3) + 1
        listc.append(y)
        
        collatzer(y,listac)

listx = []
for i in range(500):
    listc = [i]
    collatzer(i, listc)
    listx.append(listc)

print(listx)

t = turtle.Turtle()

points = {1:(-150,0)}

for i in listx:
    t.up()
    prev = 1
    ang = t.heading()
    print(ang)
    #t.right(ang)
    for num in i[::-1][:30]:
        if num in points:
            prev = num
            
        else:
            t.up()
            t.goto(points[prev])
            t.down()
            if prev * 2 == num:
        
                t.right(35)
                t.forward(20)
                prev = num
                points[num] = t.position()
                
            else:
                t.left(40)
                t.forward(20)
                prev = num
                points[num] = t.position()
            
    
