#!/usr/bin/env python3
from PIL import Image

# Načteme obrázek
img = Image.open('src/assets/curiaheronew2.png').convert('RGBA')

# Vytvoříme nový obrázek s bílým pozadím
white_bg = Image.new('RGBA', img.size, (255, 255, 255, 255))

# Složíme je dohromady
result = Image.alpha_composite(white_bg, img)

# Konvertujeme do RGB (bez alfa kanálu) a uložíme
result = result.convert('RGB')
result.save('public/og-image.png', 'PNG', quality=95, optimize=True)

print("✅ OG image s bílým pozadím vytvořen!")
