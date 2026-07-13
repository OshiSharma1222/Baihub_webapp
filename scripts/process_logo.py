from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter

src = Path(r"d:\Baihub_webapp\public\images\baihub-logo.png")
dark_out = Path(r"d:\Baihub_webapp\public\images\baihub-logo.png")
white_out = Path(r"d:\Baihub_webapp\public\images\baihub-logo-white.png")

img = Image.open(src).convert("RGBA")
# Upscale for sharper rendering on retina displays.
img = img.resize((img.width * 2, img.height * 2), Image.Resampling.LANCZOS)

w, h = img.size
px = img.load()

# Remove light fringe / background remnants.
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        lum = (r + g + b) / 3
        if lum > 210:
            px[x, y] = (0, 0, 0, 0)
        elif lum > 120:
            # soften anti-alias fringe
            px[x, y] = (0, 0, 0, min(a, int((140 - lum) * 6)))

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

dark = img.copy()
white = Image.new("RGBA", dark.size, (0, 0, 0, 0))
dark_px = dark.load()
white_px = white.load()

for y in range(dark.height):
    for x in range(dark.width):
        r, g, b, a = dark_px[x, y]
        if a == 0:
            continue
        dark_px[x, y] = (17, 17, 17, a)
        white_px[x, y] = (255, 255, 255, a)

dark.save(dark_out, "PNG", optimize=True)
white.save(white_out, "PNG", optimize=True)
print("ok", dark.size)
