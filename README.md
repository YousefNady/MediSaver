<div align="center">

# 🏥 MediSaver

### Better Healthcare. Smarter Savings.

A responsive, bilingual marketing site for MediSaver — a healthcare membership platform offering discounted access to hospitals, medical labs, radiology centers, pharmacies, and specialist clinics across Egypt.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=cloudflare&logoColor=white)](https://medisaver.yousefnadi01.workers.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**🔗 [medisaver.yousefnadi01.workers.dev](https://medisaver.yousefnadi01.workers.dev/)**

</div>

---

## ✨ Features

- 🌐 **Full English / Arabic support** — automatic RTL layout switching, persisted language preference
- 🌓 **Light / dark mode** — system-aware by default, manually toggleable, persisted across visits
- 📱 **Fully responsive** — mobile-first layout throughout
- 🏥 **6 category pages** (`/categories/:slug`) — Hospitals, Labs, Radiology, Pharmacies, Clinics, Packages — each with example providers or pricing plans
- ✉️ **Working contact form** via Web3Forms
- 🎬 **Smooth, accessibility-aware animations** with Framer Motion (respects `prefers-reduced-motion`)
- ⚡ **Route-based code splitting** for fast initial loads

## 📸 Preview

_Add a screenshot or GIF of the homepage here — drag an image into this README on GitHub and it'll auto-embed._

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | [React 18](https://react.dev/) + [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Routing | [React Router v6](https://reactrouter.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| i18n | Custom lightweight layer (`src/i18n`) — no external library |
| Forms | [Web3Forms](https://web3forms.com/) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/MediSaver.git
cd MediSaver
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Footer, Button, FAQAccordion, ...)
├── config/         # Category slugs, icons, colors (single source of truth)
├── context/        # Language & theme providers
├── hooks/          # useSEO, etc.
├── i18n/
│   └── locales/    # en.js / ar.js — all site copy lives here
├── pages/          # Route-level pages
└── App.jsx         # Router setup
```

## ⚙️ Configuration

The contact form uses [Web3Forms](https://web3forms.com/). Before deploying, set your own access key in
`src/pages/Contact.jsx`:

```js
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

> Web3Forms access keys are safe to ship client-side — they're not secret API keys. For extra safety, enable
> **Domain Whitelist** in your Web3Forms dashboard so only your live domain can submit through the key.

## ☁️ Deployment

This project is a standard static Vite build (`npm run build` → `dist/`) and deploys cleanly to any static host —
Cloudflare Pages, Vercel, Netlify, etc. It's currently live on **Cloudflare Pages**. A `public/_redirects` file
and `vercel.json` are included so client-side routing (e.g. refreshing `/about` or `/categories/hospitals`) works
correctly everywhere.

> **Note:** if you ever deploy to a GitHub Pages *project* site instead (`username.github.io/MediSaver/`), you'll
> need to set `base: "/MediSaver/"` in `vite.config.js` and `basename="/MediSaver"` on the `<BrowserRouter>` in
> `src/App.jsx` — both together. They're currently unset, which is correct for root-domain hosts like Cloudflare
> Pages / Vercel.

## 📄 License

This is a personal portfolio project. All rights reserved.

---

<div align="center">

Built with 💚 by **Yousef Nadi**

</div>
