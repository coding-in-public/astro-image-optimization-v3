import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: sharpImageService(),
    domains: ["astro.build"],
  },
});
