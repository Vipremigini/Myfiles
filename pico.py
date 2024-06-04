byte = "a relly long byte64 code"
x = input()
if x == "y":
    for i in range(0,len(byte),5):
        print(byte[i: i+5])
