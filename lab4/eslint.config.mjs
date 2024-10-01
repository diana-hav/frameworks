import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; 
import tsParser from "@typescript-eslint/parser";

const tsConfig = {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: ["tsconfig.json"], // Вказати файл конфігурації TypeScript
    },
  },
  rules: {
    "prettier/prettier": "error",
  },
};

const configs = [
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
];

export default [
  tsConfig,
  ...configs,
];
