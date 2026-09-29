<p align="center">
  <img src="docs/banner.svg" alt="Portfolio" width="100%">
</p>

# silvanomsouza.vercel.app

<p>
  <a href="https://silvanomsouza.vercel.app"><img src="https://img.shields.io/badge/live-silvanomsouza.vercel.app-000000?logo=vercel&logoColor=white" alt="Live"></a>
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-3-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind">
</p>

Personal portfolio of Silvano Moraes de Souza, Software Engineer (Python, APIs, automation and data in production). The site is in Portuguese.

![Home page](docs/screenshot-home.png)

<details>
<summary>Projects page: every card mirrors a GitHub README</summary>

![Projects page](docs/screenshot-projects.png)

</details>

| Page | Content |
|---|---|
| `/` | Profile, headline and stack, same text as the LinkedIn About section |
| `/trajetoria` | Career timeline, same as LinkedIn Experience |
| `/projetos` | Open-source projects, with a real excerpt of production ETL code |
| `/projeto/:slug` | Problem, solution, highlights, engineering decisions and limitations of each project, mirroring its GitHub README |

Project data lives in [`src/data/portfolio.json`](src/data/portfolio.json). Banners in `public/banners/` are the same SVGs as `docs/banner.svg` in each repository.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```
