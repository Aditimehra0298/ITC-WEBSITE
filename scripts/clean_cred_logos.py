from PIL import Image
import os
import shutil

root = r"d:\ITC WEBSITE"
assets = os.path.join(root, "assets")

# Restore from originals first
shutil.copy2(os.path.join(root, "Untitled design (1).png"), os.path.join(assets, "nabl.png"))
shutil.copy2(os.path.join(root, "EURO CERT Star Emblem.png"), os.path.join(assets, "eurocert.png"))
shutil.copy2(os.path.join(root, "Untitled design (2).png"), os.path.join(assets, "dedal.png"))


def nabl_to_dark(path, out, thresh=38):
    """Remove black bg; recolor line-art to navy for light backgrounds."""
    im = Image.open(path).convert("RGBA")
    px = im.load()
    w, h = im.size
    navy = (15, 23, 42)
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = (r + g + b) / 3.0
            if m <= thresh:
                px[x, y] = (0, 0, 0, 0)
            else:
                alpha = int(min(255, max(0, (m - thresh) / (255 - thresh) * 280)))
                px[x, y] = (*navy, min(255, alpha))
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    im.save(out, optimize=True)
    print("nabl", out, im.size)


def dedal_clean(path, out, thresh=32, soft=18):
    im = Image.open(path).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = (r + g + b) / 3.0
            if m <= thresh and r < 48 and g < 48 and b < 48:
                px[x, y] = (r, g, b, 0)
            elif m < thresh + soft and r < 70 and g < 70 and b < 70:
                alpha = int(255 * (m - thresh) / soft)
                px[x, y] = (r, g, b, min(a, alpha))
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    im.save(out, optimize=True)
    print("dedal", out, im.size)


def eurocert_clean(path, out, blue_tol=55):
    """Remove solid blue square background; keep stars, text, red bar."""
    im = Image.open(path).convert("RGBA")
    px = im.load()
    w, h = im.size
    # sample corner for bg blue
    cr, cg, cb, _ = px[2, 2]
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if (
                abs(r - cr) <= blue_tol
                and abs(g - cg) <= blue_tol
                and abs(b - cb) <= blue_tol
                and b > r
                and b > g
            ):
                # keep yellow stars (high r+g), white text, red bar
                is_yellow = r > 180 and g > 140 and b < 120
                is_white = r > 200 and g > 200 and b > 200
                is_red = r > 160 and g < 90 and b < 90
                if not (is_yellow or is_white or is_red):
                    px[x, y] = (r, g, b, 0)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    im.save(out, optimize=True)
    print("eurocert", out, im.size)


nabl_to_dark(os.path.join(assets, "nabl.png"), os.path.join(assets, "nabl.png"))
dedal_clean(os.path.join(assets, "dedal.png"), os.path.join(assets, "dedal.png"))
# Keep Eurocert brand blue square; just ensure PNG is cropped
im = Image.open(os.path.join(assets, "eurocert.png")).convert("RGBA")
bbox = im.getbbox()
if bbox:
    im = im.crop(bbox)
im.save(os.path.join(assets, "eurocert.png"), optimize=True)
print("eurocert", im.size)
print("done")
