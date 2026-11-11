# React Admin Dashboard

A responsive admin dashboard built with React and Vite. Personal practice project — the data shown is sample data, not from a real business.

**Live demo:** https://dhansurryasp.github.io/react-admin-dashboard/

## Features

- Dashboard overview with KPI stat cards, a revenue line chart and a weekly orders bar chart (Recharts)
- Best-selling products list with progress bars, filtered by the header search box
- Recent activity feed
- Dark and light themes via React Context
- Collapsible sidebar navigation with React Router (collapses automatically on small screens)
- "Generate Report" button that downloads a plain-text summary
- Motion and hover effects with Framer Motion
- Responsive layout from phone to desktop

The Products, Users, Analytics, Reports, Notifications, Settings and Support routes are placeholder pages; the dashboard overview is the main screen.

## Tech stack

React 19 · Vite · React Router 7 · Recharts · Framer Motion · React Icons · CSS

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The production build is configured for GitHub Pages (`base: /react-admin-dashboard/`) and copies `index.html` to `404.html` so deep links work.

## Author

Dhansurrya S P — frontend and WordPress developer.
