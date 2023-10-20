// playwright.config.{js,ts}
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // ...
  reporter: [["list"], ["@argos-ci/playwright/reporter"]],
});