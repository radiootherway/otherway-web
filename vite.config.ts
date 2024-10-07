import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import fs from 'fs';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    // host: '10.1.1.1',
    // https: {
    //   key: fs.readFileSync("/etc/letsencrypt/live/dev.fergl.ie/privkey.pem"),
    //   cert: fs.readFileSync("/etc/letsencrypt/live/dev.fergl.ie/fullchain.pem"),
    // },
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
