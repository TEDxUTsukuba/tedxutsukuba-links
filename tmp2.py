import glob
import os
from PIL import Image

IMG_FORMAT = "webp"
ORIGINAL_DIR = "/Users/makiart/Documents/projects/TEDxUTsukuba/tedxutsukuba-links/public/"
CONVERT_DIR = "/Users/makiart/Documents/projects/TEDxUTsukuba/tedxutsukuba-links/public/"

files = glob.glob(ORIGINAL_DIR + "*.png")

for file in files:
    file_name = os.path.splitext(os.path.basename(file))[0]

    image = Image.open(file)
    image = image.convert("RGBA")
    image.save(CONVERT_DIR + file_name + '.webp', "webp")