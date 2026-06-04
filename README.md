# My-Profile

My personal profile website — a minimal, single-page portfolio built with plain
HTML and CSS (no build step, no frameworks).

## Structure

```
index.html            # the home page (About, Projects, Blog, Contact)
assets/
  style.css           # all styling — edit the variables at the top to retheme
  main.js             # dark-mode toggle + current year
blog/
  hello-world.html    # example post — copy it to add new ones
```

## How to edit

- **Your info:** open `index.html` and replace every `Your Name`, the tagline,
  the About text, and the social links (search for `TODO`).
- **Projects:** edit the `<li class="entry">` items under the Research &
  Projects section.
- **Colors / fonts:** change the CSS variables at the top of `assets/style.css`
  (`--accent`, `--bg`, `--fg`, fonts, etc.).
- **New blog post:** copy `blog/hello-world.html`, rename it, edit the content,
  then add a link to it in the Blog section of `index.html`.

## Preview locally

Just open `index.html` in a browser, or run a tiny server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish for free with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick your branch and the `/ (root)` folder, and save.
4. Your site goes live at `https://<username>.github.io/<repo>/`.

To use a custom domain (like the one in your link-in-bio), add it under
Settings → Pages → Custom domain, and create a `CNAME` file with the domain.
