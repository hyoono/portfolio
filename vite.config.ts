import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // DEPLOYMENT: Change base to your deploy path if needed
  // e.g. base: '/portfolio/' for GitHub Pages at github.com/hyoono/portfolio
  base: "/",
  server: {
    watch: {
      // Exclude Chrome's temp profile dir (used by Puppeteer/browser subagent)
      // to prevent EBUSY crashes on locked GPU cache files
      ignored: ["**/.tmp-chrome-*/**", "**/node_modules/**"],
    },
  },
});
