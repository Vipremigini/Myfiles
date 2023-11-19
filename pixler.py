file = open(r"C:\Users\admin\Downloads\pixlr.txt",'r')

lines = file.readlines()

height = len(lines)
width = len(lines[0])

print( height, width)

black = []

for y in range(len(lines)):
    for x in range(len(lines[y])):
        if lines[y][x] == '1':
            black.append([(int(x)), ( len(lines) -int(y)) ])
            
            

print(black)
