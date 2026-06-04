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
blog/
  hello-world.html    # Example post — copy it to add new ones
assets/
  style.css           # All styling — edit the variables at the top to retheme
  main.js             # Dark-mode toggle + current year
notes/                # (create this) put compiled LaTeX PDFs here
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
1. **Compiled PDF** — put `something.pdf` in a `notes/` folder and link to it.
2. **Web note** — copy `blog/hello-world.html` as a template and write the math
   directly (it already loads MathJax).

## Add a blog post

Copy `blog/hello-world.html`, rename it, edit the content, then add a link to
it in `blog.html`.

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
