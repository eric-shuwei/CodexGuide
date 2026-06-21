import { inject } from "@vercel/analytics";
import { defineClientConfig } from "vuepress/client";

const analyticsHosts = new Set(["codexguide.offerya.cc"]);

export default defineClientConfig({
  enhance: () => {
    if (
      import.meta.env.PROD &&
      typeof window !== "undefined" &&
      analyticsHosts.has(window.location.hostname)
    ) {
      inject();
    }
  },
});
