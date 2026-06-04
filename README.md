# My-Profile

Moshi Fu's personal website — a minimal, multi-page academic profile built with
plain HTML and CSS (no build step, no frameworks). LaTeX math is rendered with
MathJax on the relevant pages.

## Structure

```
index.html            # Home: About + Contact
notes.html            # LaTeX notes (MathJax enabled)
publications.html     # Publications
projects.html         # Projects
problems.html         # Fun problems & algorithms (MathJax enabled)
reading.html          # Log of papers read (MathJax enabled)
blog.html             # Blog index
blog/                 # (create this) put blog post HTML files here
assets/
  style.css           # All styling — edit the variables at the top to retheme
  main.js             # Dark-mode toggle + current year
notes/
  real-analysis.tex   # Sample LaTeX source
  real-analysis.pdf   # Sample compiled PDF (replace with your own notes)
  README.md           # The LaTeX -> PDF -> link workflow
```

## How to edit

- **Bio / contact:** edit `index.html`.
- **A section page** (notes, publications, projects, problems, reading): open
  the matching `*.html` file. Each has a commented-out template showing the
  markup for one entry — copy it and fill it in.
- **Colors / fonts:** change the CSS variables at the top of `assets/style.css`
  (`--accent`, `--bg`, `--fg`, fonts, etc.). The same variables drive light and
  dark mode.

## Writing LaTeX

MathJax is loaded on `notes.html`, `problems.html`, and `reading.html`, so you
can write math inline with `$ ... $` (e.g. `$e^{i\pi}+1=0$`) or display math
with `$$ ... $$`.

For longer notes you have two options:
1. **Compiled PDF** — put `something.pdf` in the `notes/` folder and link to it
   (see `notes/README.md`). This is the main workflow.
2. **Web note** — write the math directly on a page that loads MathJax.

## Add a blog post

Create `blog/your-post.html` (copy the structure of any page in this repo),
then add a link to it in `blog.html`.

## Preview locally

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Publish for free with GitHub Pages

1. Push to GitHub.
2. **Settings → Pages → Build and deployment**, set **Source** to
   *Deploy from a branch*, pick the branch and the `/ (root)` folder, save.
3. Live at `https://mo119m.github.io/My-Profile/`.

For a custom domain, add it under Settings → Pages → Custom domain and create a
`CNAME` file with the domain.
