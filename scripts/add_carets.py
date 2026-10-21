from pathlib import Path
import re

p = Path(r"d:\ITC WEBSITE\index.html")
t = p.read_text(encoding="utf-8")

def repl(m):
    open_tag, text, close = m.group(1), m.group(2), m.group(3)
    if "caret" in text:
        return m.group(0)
    return f'{open_tag}{text.strip()} <span class="caret" aria-hidden="true">▾</span>{close}'

t2 = re.sub(
    r'(<li class="has-sub">\s*<a class="nav-link"[^>]*>)([^<]+)(</a>)',
    repl,
    t,
)
p.write_text(t2, encoding="utf-8")
print("carets", t2.count('class="caret"'))
