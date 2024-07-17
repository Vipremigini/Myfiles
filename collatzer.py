x = int(input("enter a number"))
print(x)

def collatzer(y):
    if y == 0:
        print(0)
    elif y == 1:
        print(1)
    elif y % 2 == 0:
        y = y / 2
        print(y)
        collatzer(y)
    else:
        y = (y * 3) + 1
        print(y)
        collatzer(y)

collatzer(x)
        
