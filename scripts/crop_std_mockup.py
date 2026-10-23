from pathlib import Path
from PIL import Image

src = Path(
    r"C:\Users\user\.cursor\projects\d-ITC-WEBSITE\assets"
    r"\c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_"
    r"68b75a309d0dd2713fe487a2d58d8dff_images_image-f7ecef36-e13e-4797-bcea-d8354200cb8b.png"
)
im = Image.open(src)
print("source", im.size, im.mode)
out = Path(r"d:\ITC WEBSITE\public\std")
out.mkdir(parents=True, exist_ok=True)
w, h = im.size

# Full mockup is a long page screenshot — crop approximate visual regions
crops = {
    "hero.jpg": (0, int(h * 0.015), w, int(h * 0.155)),
    "tech-small.jpg": (int(w * 0.50), int(h * 0.335), int(w * 0.70), int(h * 0.415)),
    "product-1.jpg": (int(w * 0.07), int(h * 0.425), int(w * 0.28), int(h * 0.515)),
    "product-2.jpg": (int(w * 0.285), int(h * 0.425), int(w * 0.495), int(h * 0.515)),
    "product-3.jpg": (int(w * 0.07), int(h * 0.52), int(w * 0.28), int(h * 0.61)),
    "product-4.jpg": (int(w * 0.285), int(h * 0.52), int(w * 0.495), int(h * 0.61)),
    "banner.jpg": (int(w * 0.07), int(h * 0.615), int(w * 0.70), int(h * 0.695)),
    "params-lab.jpg": (int(w * 0.05), int(h * 0.705), int(w * 0.42), int(h * 0.815)),
    "cap-lab.jpg": (int(w * 0.48), int(h * 0.825), int(w * 0.93), int(h * 0.925)),
}

for name, box in crops.items():
    c = im.crop(box).convert("RGB")
    c.save(out / name, quality=92)
    print(name, box, c.size)
