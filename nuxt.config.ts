import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["shadcn-nuxt", "@nuxtjs/supabase"],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});