import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  supabase: {
    redirect: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
});
