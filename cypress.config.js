const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
    viewportSizes: [
      {
        viewportWidth: 1366,
        viewportHeight: 768,
      },
      {
        viewportWidth: 375,
        viewportHeight: 812,
      },
    ],
  },
});
