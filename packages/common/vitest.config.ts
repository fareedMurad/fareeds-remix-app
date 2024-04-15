import * as VitestConfig from "vitest/config";

export default VitestConfig.defineConfig({
  test: {
    // See the list of config options in the Config Reference:
    // https://vitest.dev/config/
    environment: "jsdom",
    globals: true,
    includeSource: ["./**/*.{ts,tsx}"],
    setupFiles: ["./vitest.setup.ts"],
    exclude: ["node_modules", "e2e"],
    coverage: {
      reporter: ["html-spa", "lcov"],
    },
  },
});
