import turtle

def collatzer(y,listac):
    global listc
    if y == 0:
        print(0)
    elif y == 1:
        return listac
    elif y % 2 == 0:
        y = int(y / 2)
        listc.append(y)
        print(y)
        collatzer(y,listac)
    else:
        y = (y * 3) + 1
        listc.append(y)
        print(y)
        collatzer(y,listac)

listx = []
for i in range(51):
    listc = [i]
    collatzer(i, listc)
    listx.append(listc)

print(listx)

t = turtle.Turtle()

points = {}

for i in listx():
    t.up()
    
    

