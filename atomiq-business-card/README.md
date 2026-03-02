# atomIQworks Micro Landing Business Card

This is a high-fidelity micro web landing card mimicking a miniature physical business card. It serves both as a beautiful embedded web component and a mathematically precise `inch`-based physical layout for desktop setups.

## Contents
* `index.html`: Open this file in any web browser to view the mini browser card demo.
* `styles.css`: All the CSS geometry, themes, and interactions in one place.
* `logo.svg`: A standalone scalable vector version of the atomIQworks geometric logomark.

## Usage

### 1. Web Embedding 🌐
To embed this inside an existing React/Next.js or HTML app, you can drop the `<article class="micro-card">` HTML block exactly as is and import `styles.css`.
* The card defaults to a `layout-stack` style.
* Use the class `.layout-compact` to force the logo horizontal to the wordmark.
* A fallback of `~322px` is provided in CSS. Remove `--card-w` and `--card-h` (or comment them out) in `styles.css` if you exclusively want it running dynamically inside Flexbox/Grid systems based on `max-width` percentages.

### 2. Printing Physically 🖨️
The card is heavily driven by `in` (inch) units to ensure the exact 3.35" by 2.17" requirement.
To print the design out exactly:
1. Open `index.html`.
2. Hit print (Ctrl/Cmd + P).
3. Ensure "Background graphics" is checked in print settings to preserve colors.
4. Set scale to 100% or "Default".
5. The `@page` media print rule in `styles.css` strictly forces the dimensions and hides the demo overlay tools.

### 3. Theming 🌓
Add `data-theme="dark"` onto the wrapping element (`<html>` or just the container you embed it into) to swap it to a rich navy theme suited for tech sites. 

## CSS Interaction Model
* Responsive: Automatically shrinks via `transform` scale on displays under 400px wide.
* CSS `cubic-bezier` curves power the CTA hover + press to give it a lifelike button impact.
* URL structure uses an abstract `var(--font-mono)` mapping for visual credibility.
