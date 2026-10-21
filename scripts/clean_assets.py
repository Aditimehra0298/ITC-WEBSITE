from PIL import Image, ImageFilter, ImageDraw
import os

assets = r"d:\ITC WEBSITE\assets"

# --- 1) Logo: remove black background -> transparent ---
logo_path = os.path.join(assets, "logo.png")
# restore from original if needed
src_logo = r"d:\ITC WEBSITE\Untitled design.png"
if os.path.exists(src_logo):
    logo = Image.open(src_logo).convert("RGBA")
else:
    logo = Image.open(logo_path).convert("RGBA")

pixels = logo.load()
w, h = logo.size
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r < 35 and g < 35 and b < 35:
            pixels[x, y] = (r, g, b, 0)
        elif r < 55 and g < 55 and b < 55:
            brightness = (r + g + b) / 3
            na = int(max(0, min(255, (brightness - 20) * 7)))
            pixels[x, y] = (r, g, b, na)

bbox = logo.getbbox()
if bbox:
    pad = 24
    x0 = max(0, bbox[0] - pad)
    y0 = max(0, bbox[1] - pad)
    x1 = min(w, bbox[2] + pad)
    y1 = min(h, bbox[3] + pad)
    logo = logo.crop((x0, y0, x1, y1))

logo.save(logo_path, "PNG")
print("logo cleaned", logo.size)

# --- 2) Hero-3: remove hexagonal grid on left ---
# refresh from source first
src3 = r"d:\ITC WEBSITE\ChatGPT Image Oct 21, 2026, 03_25_45 PM-3.png"
hero3_path = os.path.join(assets, "hero-3.png")
hero = Image.open(src3).convert("RGBA")
hw, hh = hero.size

sample = hero.crop((int(hw * 0.18), int(hh * 0.35), int(hw * 0.38), int(hh * 0.7))).resize((1, 1))
sr, sg, sb, _ = sample.getpixel((0, 0))
sr, sg, sb = min(255, sr + 18), min(255, sg + 22), min(255, sb + 28)

wash = Image.new("RGBA", (hw, hh), (0, 0, 0, 0))
draw = ImageDraw.Draw(wash)
for i in range(0, int(hw * 0.48)):
    t = i / (hw * 0.48)
    for y0, y1, strength in [
        (0, int(hh * 0.55), 0.92),
        (int(hh * 0.55), int(hh * 0.75), 0.55),
        (int(hh * 0.75), hh, 0.2),
    ]:
        alpha = int(255 * strength * (1 - t) ** 1.35)
        if alpha < 4:
            continue
        draw.line([(i, y0), (i, y1)], fill=(sr, sg, sb, alpha))

wash = wash.filter(ImageFilter.GaussianBlur(radius=18))
hero = Image.alpha_composite(hero, wash)

top = Image.new("RGBA", (hw, hh), (0, 0, 0, 0))
zone_w, zone_h = int(hw * 0.42), int(hh * 0.5)
for i in range(zone_w):
    for j in range(zone_h):
        nx, ny = i / zone_w, j / zone_h
        a = int(210 * max(0, 1 - (nx * 1.1 + ny * 0.85)))
        if a > 0:
            top.putpixel((i, j), (sr, sg, sb, a))
top = top.filter(ImageFilter.GaussianBlur(radius=22))
hero = Image.alpha_composite(hero, top)

hero.convert("RGB").save(hero3_path, "PNG")
print("hero-3 grid cleaned", hero.size)
print("done")
