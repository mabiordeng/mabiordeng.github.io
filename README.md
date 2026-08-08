# Mabior Deng Kuer Mabior Academic Website

A custom, responsive academic website built for GitHub Pages. It uses plain HTML, CSS, and JavaScript, so it does not require Jekyll, Ruby, npm, or a theme.

## Included

- Research-focused home page
- About, research, selected work, methods, education, service, and contact sections
- Printable CV page
- Light and dark themes
- Responsive mobile navigation
- Search engine metadata and Person schema
- Accessible structure and reduced-motion support
- Custom 404 page and favicon

## Add the professional headshot

1. Rename the headshot `profile.jpg`.
2. Put it in `assets/images/profile.jpg`.
3. Commit and push the file.

The website automatically uses the included monogram placeholder when `profile.jpg` is missing.

## Publish with GitHub Pages

### Replace the current repository content

1. Open the repository used for `mabiordeng.com`.
2. Back up any files you may need.
3. Upload the contents of this folder to the repository root. Do not upload the outer `mabior-academic-website` folder itself.
4. Commit the changes to the default branch, usually `main`.
5. In GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`, then save.
8. Visit `https://mabiordeng.com/` after deployment.

The `.nojekyll` file tells GitHub Pages to serve the site as a standard static website.

## Customize links and content

Edit `index.html` and `cv.html` with any code editor. Search for these items first:

- `mmabior@purdue.edu`
- `0009-0005-6542-4896`
- `github.com/MabiorAero`
- Education entries that need university names and dates
- Research statuses and publication links
- Service roles and appointments

## Local preview

Open `index.html` directly in a browser, or run a local server from the website folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
