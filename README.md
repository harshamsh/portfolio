# Portfolio — Sri Harsha Musunuru

Static portfolio site. Three files, no build step, no dependencies.

```
index.html    all content
styles.css    all styling (design tokens at the top of the file)
script.js     scroll-spy for the section index only; site works without it
.nojekyll     tells GitHub Pages to serve the files as-is
```

## Before it goes live

Read `TODO.md` first. There are four `REPLACE` placeholders in `index.html` (email ×2, LinkedIn ×2) and a `cv.pdf` link that needs a real file next to `index.html`. `TODO.md` also lists the factual claims that need confirming before publishing.

## Preview locally

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

From inside this folder, pointed at `https://github.com/harshamsh/portfolio`:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/harshamsh/portfolio.git
git push -u origin main
```

If the repo already has commits, clone it first and copy these files in, rather than force-pushing.

Then turn Pages on:

1. Repo → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main`, folder `/ (root)` → **Save**

The site appears at **https://harshamsh.github.io/portfolio/** within a couple of minutes. All paths are relative, so it works from that subdirectory without changes.

### Custom domain (optional)

Add a file named `CNAME` containing just your domain, e.g. `harsha.dev`. Then point a `CNAME` DNS record at `harshamsh.github.io`, and set the domain under Settings → Pages.

## Editing

Colours, fonts and spacing are CSS custom properties in the `:root` block at the top of `styles.css` — change them there rather than hunting through the file.

Adding a case study: copy an existing `<article class="case">` block, give it a new `id`, and add a matching entry to the `<nav class="rail">` list so it appears in the index.

## Design notes

- Palette is taken from resistor colour bands — violet (7) for signal, red (2) for fault — on a cool datasheet-grey ground rather than the usual warm cream.
- Type: Archivo (expanded, display), IBM Plex Sans (body), IBM Plex Mono (labels, hex, part numbers).
- The hero graphic is the actual bus-state capture from case study A: clock and data toggling normally, then both lines driven low. It animates once on load and is skipped entirely under `prefers-reduced-motion`.
- Numbering is used only where the content is genuinely ordered — the elimination ladder in case study A, and the A–E case study keys.
