import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // No `base` needed here: Vercel / Cloudflare Pages serve the app from the
  // domain root ("/"). The "/MediSaver/" base was only required for GitHub
  // Pages project sites (username.github.io/MediSaver/). If you ever deploy
  // to a GitHub Pages project site again, set base: "/MediSaver/" here AND
  // basename="/MediSaver" in App.jsx's <BrowserRouter> together.
});
