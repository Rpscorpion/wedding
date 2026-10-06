# Kerala Wedding Invitation

A premium dual-wedding invitation website for Nikhil & Sneha and Nithya & Ajaydev, designed for a same-day celebration at Hooriya Auditorium, Malappuram.

## Run locally

```bash
npm install
npm run dev
```

## Replace images

Place or update your photos in the matching folders:

- `public/images/nikhil-sneha/`
- `public/images/nithya-ajaydev/`

Each folder contains a `hero.svg` and `memory-01.svg` through `memory-04.svg` placeholder files. Replace them with your own JPG/PNG/WebP images while keeping the same names.

## Replace video

Add your final video here:

- `public/videos/wedding-story.mp4`

If the file is missing, the section will automatically show a stylish placeholder message.

## Change wedding details

Edit the central wedding details file:

- `src/data/weddingData.js`

Update values such as date, venue, couple names, invitation text, and timeline entries here.

## Deploy to GitHub Pages

GitHub repository names cannot contain spaces, so create the repository as `two-hearts`. The app uses a relative Vite base path and base-aware asset URLs, so it works from a GitHub Pages project URL.

The workflow in `.github/workflows/deploy.yml` builds and deploys the `dist` folder automatically whenever code is pushed to `main`. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source. The site will be available at `https://<your-github-username>.github.io/two-hearts/`.

## Project structure

- `src/pages/Home.jsx` — main invitation landing page
- `src/pages/CouplePage.jsx` — individual couple page
- `src/data/weddingData.js` — editable configuration
- `public/images/` — couple image assets
- `public/videos/` — video asset
- `public/audio/` — music asset
