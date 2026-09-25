# Mark Adrian Remigio — Portfolio

A personal portfolio website for Mark Adrian Remigio, a 4th-year BSIT student at Universidad de Manila and YSLEP scholar. Built as a plain HTML/CSS/JS alternative to a React version, with a custom **"Ninjago Brick-Built"** design system — a LEGO-inspired neo-brutalist aesthetic in white and Ninjago green.

## Overview

This site showcases education, experience, organizations, certifications, skills, and projects through a data-driven structure — content lives in simple JavaScript arrays, so sections update without touching any markup. Highlights include a GitHub stats integration and a custom showcase modal for browsing details and images per entry.

## Features

- **Ninjago Brick-Built design system** — thick ink borders, hard offset shadows, brick "studs" on cards, no blur/gradient/glassmorphism. Typography mix of Silkscreen, Space Grotesk, and Work Sans.
- **Showcase modal** — a gallery-and-details modal (currently on Education) with an image carousel, key highlights, and animated entry.
- **Data-driven content** — Education, Experience, Organizations, Certifications, Skills, and Projects are all defined as arrays; empty sections hide automatically.
- **Skill logo tiles** — auto-resolves `assets/skills/<slug>.svg` (falls back to `.png`, then a monogram) for each skill.
- **Animated KPI counters** — stats count up on hover/tap, with a reduced-motion fallback.
- **Live GitHub stats** — pulled directly from the GitHub API.
- **Fully responsive**, dependency-free front end.

## Tech Stack

- **HTML5**
- **CSS3** — custom properties, no framework
- **Vanilla JavaScript** — no build tools, no npm dependencies

## Setup / Run Locally

No build step required.

1. Clone the repository:
   ```
   git clone https://github.com/Remigio2004/portfolio-mark-remigio.git
   ```
2. Open `index.html` directly in a browser, or serve the folder with any static server (recommended, to avoid `file://` CORS quirks with the GitHub API and fonts):
   ```
   npx serve .
   ```

## Screenshots
<img width="1672" height="951" alt="image" src="https://github.com/user-attachments/assets/9eb4fd45-9af2-4e31-99f5-49da559a5218" />


## Contact

- **GitHub:** [Remigio2004](https://github.com/Remigio2004)
- **LinkedIn:** [remigio-markadrian](https://www.linkedin.com/in/remigio-markadrian/)
