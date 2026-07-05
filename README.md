# ArcGIS Pro Course Website

A MkDocs Material starter site for an ArcGIS Pro course.

## Quick start

1. Create a new GitHub repository, for example: `arcgis-pro-course`.
2. Upload all files in this folder to the repository.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push or upload the files to the `main` branch.
6. The site will build automatically from `.github/workflows/deploy.yml`.

## Edit the site

Most course content is in Markdown files inside the `docs/` folder.

- Homepage: `docs/index.md`
- Start page: `docs/start-here.md`
- Lessons: `docs/lessons/`
- Labs: `docs/labs/`
- Data page: `docs/data.md`
- Troubleshooting page: `docs/troubleshooting.md`
- Resources page: `docs/resources.md`

Site settings and navigation are in `mkdocs.yml`.

## Run locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open the local preview URL shown in the terminal.
