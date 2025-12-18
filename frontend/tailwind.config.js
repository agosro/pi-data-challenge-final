/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",        // Azul principal (botones, links)
        primaryHover: "#1d4ed8",

        sidebar: "#0f172a",        // Sidebar oscuro
        sidebarHover: "#1e293b",

        background: "#f8fafc",     // Fondo general
        card: "#ffffff",           // Cards

        muted: "#64748b",          // Texto secundario
        border: "#e5e7eb",

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
}
