const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["app.js"],
    ...js.configs.recommended,
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "error",
    },
  },
];
