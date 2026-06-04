# Notes

This folder holds my LaTeX notes as PDFs, plus their `.tex` sources.

## Workflow

1. Write a note in LaTeX, e.g. `real-analysis.tex`.
2. Compile it to a PDF:
   ```bash
   pdflatex real-analysis.tex      # produces real-analysis.pdf
   ```
3. Commit both the `.tex` and the `.pdf`.
4. Add a link to the PDF from `../notes.html` so visitors can click and read it
   directly in the browser:
   ```html
   <a class="entry-title" href="notes/real-analysis.pdf">Real Analysis</a>
   ```

The `real-analysis.*` files are a sample — replace them with your real notes.
