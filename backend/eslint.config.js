const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.ts"],
    plugins: {
      import: importPlugin
    },
    rules: {
      "import/order": [
        "warn",
        {
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true }
        }
      ],
      "no-console": "off"
    }
  },
  {
    ignores: ["dist/**", "node_modules/**", "eslint.config.js"]
  }
];
