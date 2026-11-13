# Abdallah's Portfolio

A multi-page portfolio website for Abdallah, a digital marketing specialist focused on content creation, content strategy and social media growth. Built as a freelance project.

**Live site:** _add the link after deployment_

## Features

- Multi-page navigation with React Router (Home, About, Services, Work, Contact)
- **Work** page with case studies (problem, how it was handled, result) in a responsive grid, with a featured project at the top
- Contact form connected to Formspree, with loading, success and error states
- Dark / light mode toggle
- Responsive layout with a mobile menu
- Custom 404 page

## Tech Stack

- React + Vite
- React Router (`react-router-dom`)
- Plain CSS with CSS variables for theming
- Formspree for form submissions
- Space Grotesk (Google Fonts)

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/abdallah-portfolio.git
cd abdallah-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── components/   # Navbar, Footer, Layout, shared sections
├── data/         # projects.js (case studies data)
├── pages/        # Home, About, Services, Work, Contact, NotFound
├── App.jsx       # Routes
└── main.jsx
```

## Adding a New Project

Open `src/data/projects.js` and add an object to the array:

```js
{
  id: "project-id",
  name: "Project Name",
  industry: "Industry",
  goal: "Main goal",
  format: "Optional, e.g. 12 posts",
  problem: "...",
  approach: "...",
  result: "...",
  metrics: [{ value: "+75%", label: "Metric name" }], // optional
  featured: false, // optional, true makes it full width
}
```

## Contact Form

The form sends submissions to Formspree. To use your own form, replace `FORMSPREE_URL` in the Contact component with your endpoint.

## Deployment

Works on Vercel or Netlify. Because the site uses client-side routing, configure a rewrite so every path returns `index.html`, otherwise refreshing a page like `/work` returns a 404.

## Author

Built by Mohanad Fekry.
