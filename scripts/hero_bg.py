from collections import deque
from pathlib import Path

from PIL import Image

src = next(
    Path(r"C:\Users\OSHI SHARMA\.cursor\projects\d-Baihub-webapp\assets").glob(
        "*a08d6e40*"
    )
)
out = Path(r"d:\Baihub_webapp\public\images\hero-character-bg-removed.png")

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()

visited = set()
queue = deque()


def is_white_bg(r: int, g: int, b: int, a: int) -> bool:
    # Light, near-neutral studio background + faint floor shadows.
    # Blue shirt has higher saturation, so it stays intact.
    return a != 0 and min(r, g, b) >= 200 and max(r, g, b) - min(r, g, b) <= 22


for x in range(w):
    queue.append((x, 0))
    queue.append((x, h - 1))
for y in range(h):
    queue.append((0, y))
    queue.append((w - 1, y))

while queue:
    x, y = queue.popleft()
    if (x, y) in visited or x < 0 or y < 0 or x >= w or y >= h:
        continue
    visited.add((x, y))
    r, g, b, a = px[x, y]
    if is_white_bg(r, g, b, a):
        px[x, y] = (0, 0, 0, 0)
        queue.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

# Single gentle pass: only clear very light leftover halo pixels on the edge.
to_clear = []
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        if min(r, g, b) < 210:
            continue
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and px[nx, ny][3] == 0:
                to_clear.append((x, y))
                break
for x, y in to_clear:
    px[x, y] = (0, 0, 0, 0)

def row_is_dark_frame(y: int) -> bool:
    opaque = 0
    dark = 0
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        opaque += 1
        if max(r, g, b) < 70:
            dark += 1
    return opaque > w * 0.5 and dark >= opaque * 0.95


def col_is_dark_frame(x: int) -> bool:
    opaque = 0
    dark = 0
    for y in range(h):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        opaque += 1
        if max(r, g, b) < 70:
            dark += 1
    return opaque > h * 0.5 and dark >= opaque * 0.95


def clear_row(y: int) -> None:
    for x in range(w):
        px[x, y] = (0, 0, 0, 0)


def clear_col(x: int) -> None:
    for y in range(h):
        px[x, y] = (0, 0, 0, 0)


# Trim solid black frame bars from each edge (stop at first non-frame line).
for y in range(h):
    if row_is_dark_frame(y):
        clear_row(y)
    else:
        break
for y in range(h - 1, -1, -1):
    if row_is_dark_frame(y):
        clear_row(y)
    else:
        break
for x in range(w):
    if col_is_dark_frame(x):
        clear_col(x)
    else:
        break
for x in range(w - 1, -1, -1):
    if col_is_dark_frame(x):
        clear_col(x)
    else:
        break

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(out, "PNG")
print("ok", img.size)
