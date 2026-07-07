import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        wire: {
          ink: "#1f2937",
          muted: "#6b7280",
          line: "#d1d5db",
          panel: "#f8fafc",
          shade: "#eef2f7"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
