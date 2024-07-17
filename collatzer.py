import turtle
import math

t = turtle.Turtle()
t.up()
t.goto(-400,-350)
t.down()
ya = 0
x = int(input("enter a number"))
print(x)
listc = [x]

def collatzer(y):
    global listc
    if y == 0:
        print(0)
    elif y == 1:

    elif y % 2 == 0:
        y = int(y / 2)
        listc.append(y)
        print(y)
        collatzer(y)
    else:
        y = (y * 3) + 1
        listc.append(y)
        print(y)
        collatzer(y)

collatzer(x)

def grapher(l):
    maxn = max(l)
    bas = math.pow(maxn, 1/700)
    leng = len(l)
    stp = 800/leng
    ya = 0
    for i in l:
        pos = t.position()
        t.goto(pos[0] + stp, -350 + math.log(i,bas))

grapher(listc)
