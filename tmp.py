from PIL import Image                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                   
# Open the image file                                                                                                                                                                                                                                                                            
img = Image.open('path')                                                                                                                                                                                       
# Convert the image to RGBA mode                                                                                                                                                                                                                                                                 
img = img.convert('RGBA')                                                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                
# Define a new image that will hold the pixels of the converted image                                                                                                                                                                                                                            
new_img = Image.new('RGBA', img.size)                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                            
# Replace all white (also shades of whites) pixels in the original image with transparent ones                                                                                                                                                                                                   
for x in range(img.width):                                                                                                                                                                                                                                                                       
    for y in range(img.height):                                                                                                                                                                                                                                                                  
        pixel = img.getpixel((x, y))                                                                                                                                                                                                                                                             
        if pixel[0] > 235 and pixel[1] > 235 and pixel[2] > 235:
            new_img.putpixel((x, y), (255, 255, 255, 0))
        else:                                                                                                                                                                                                                                                                                    
            new_img.putpixel((x, y), pixel)                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                
# Save the new image                                                                                                                                                                                                                                                                             
new_img.save('path', 'PNG')   