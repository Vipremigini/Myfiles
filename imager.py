import PIL.Image as img
import io
import base64
import serial

ser = serial.Serial("COM19", 115200)

b = ""
line = -1
ser.write(b'y')
while (line < 5177):
    sl = ser.readline()
    sl = str(sl)[2:7]
    b = b + sl
    line += 1
    print(line)
    print(sl)
    
b = base64.b64decode(b)
i = img.open(io.BytesIO(b))
i.show()
print("done")
