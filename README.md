# KALKI Defence Systems website (React + Vite)

    npm install
    npm run dev        # local dev server
    npm run build      # production build in dist/

## Add your video
Put your 30-60 s film at `public/hero.mp4` (H.264, 1080p, ideally under 15 MB).
- It plays muted and looping behind the hero, like the reference sites.
- "Watch the film" opens the same file in a full-size player with sound and controls.
- Until the file exists, the hero shows a drawn radar HUD instead (no stock imagery used).
- Optional poster image: set `HERO_POSTER` in `src/config.js`.

## Edit content
Copy, nav links, video path and contact email live in `src/config.js` (plus the Mission and Contact components).
Set `CONTACT_EMAIL` before launch. The form opens the visitor's email app (mailto); swap in a real endpoint (Formspree, your own API) when ready.

## Structure
    src/App.jsx               page assembly
    src/config.js             copy, nav, video path, contact email
    src/components/           Header, Hero, RadarCanvas, Mission, FocusAreas, Approach, Vision, Contact, Footer, VideoModal, Icons
    src/styles/global.css     design tokens (colours, fonts) at the top
    public/kalki-logo.png     transparent-background version of your logo

## Notes
- Colours are taken from the logo: red #fc1920, white, black. Fonts: Saira (headings) and Barlow (body) via Google Fonts; self-host them if you want no third-party requests.
- The one-line descriptions under each focus area and the "From sky to decision" section are draft copy written from your brief. Review before publishing.
- Add an Open Graph image and analytics in `index.html` as needed.
