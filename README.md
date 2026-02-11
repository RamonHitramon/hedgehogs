# HEDGEHOGS Memecoin — Landing Page

Single-page landing for HEDGEHOGS (Solana memecoin). Lost in the fog, still hunting gems.

## Setup

1. **Images**: The `images/` folder already contains `meme1.png`–`meme6.png` (copied from your project root). The hero uses `meme1.png`, lore uses `meme2`–`meme4`, and the gallery shows all six. To use your own:
   - Add or replace files in `images/` and name them `meme1.png`, `meme2.png`, … (and update `index.html` if you use different names).
   - **Fog**: The site uses CSS gradient fog by default. Optional: add `fog-layer-1.png` and `fog-layer-2.png` in `images/` and reference them in `styles.css` for custom fog art.
   - **Cursor**: The cursor is a CSS candle + animated flame. Optional: use `images/candle-cursor.png` and switch in CSS to `cursor: url(images/candle-cursor.png), none`.

2. **Placeholders**: Replace in `index.html` and `script.js`:
   - Pump.fun link (`#pumpfun`), Twitter (`#twitter`), Telegram (`#telegram`), Discord (`#discord`)
   - Contract address in the tokenomics section (id `contract-address`)

## File structure

```
/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── (meme images)
│   ├── fog-layer-1.png (optional)
│   ├── fog-layer-2.png (optional)
│   └── candle-cursor.png (optional)
└── README.md
```

## Публикация на GitHub Pages

1. Создай репозиторий на GitHub (например, `hedgehogs`).
2. В папке проекта выполни:

```bash
git init
git add .
git commit -m "HEDGEHOGS landing page"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЛОГИН/hedgehogs.git
git push -u origin main
```

3. На GitHub: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** → Folder: **/ (root)** → Save.
4. Сайт будет доступен по адресу: `https://ТВОЙ_ЛОГИН.github.io/hedgehogs/`

## Run locally

Open `index.html` in a browser or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Tech

- Pure HTML/CSS/JS
- Mobile-first, responsive (768px, 1024px breakpoints)
- Animated fog (CSS/canvas), custom cursor, scroll animations, copy-to-clipboard for contract

Not financial advice. DYOR. Don't get lost. Stay sharp. Stay searching.
