import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path is set for GitHub Pages: https://swapnilnarwade1203.github.io/Portfolio/
// If you deploy elsewhere (Vercel, Netlify, custom domain), change base to "/"
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
});
