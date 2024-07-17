import turtle
import math

t = turtle.Turtle()
t.up()
t.goto(-400,0)
t.down()
ya = 0
x = int(input("enter a number"))
print(x)

def collatzer(y):
    global ya
    if y == 0:
        print(0)
    elif y == 1:
        print(1)
    elif y % 2 == 0:
        pos = t.position()
        y = int(y / 2)
        t.goto(pos[0] + 1, math.log(y,1.2))
        print(y)
        collatzer(y)
    else:
        pos = t.position()
        y = (y * 3) + 1
        t.goto(pos[0] + 1, math.log(y,1.2))
        print(y)
        collatzer(y)

collatzer(x)
