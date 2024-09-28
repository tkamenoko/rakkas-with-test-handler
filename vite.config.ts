import react from "@vitejs/plugin-react";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { type UserConfig, defineConfig } from "vitest/config";

export default defineConfig(async () => {
  const config = {
    plugins: [tsconfigPaths(), react(), rakkas()],
    test: {
      environment: "node",
      include: ["tests/**/*.test.{ts,tsx}"],
      setupFiles: ["tests/setup/polyfill.ts"],
    },
  } satisfies UserConfig;

  return config;
});
