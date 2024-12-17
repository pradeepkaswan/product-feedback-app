import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import drizzlePlugin from "eslint-plugin-drizzle";
import eslintPluginPrettier from "eslint-config-prettier";
import { fixupPluginRules } from "@eslint/compat";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
  {
    plugins: {
      drizzle: fixupPluginRules(drizzlePlugin),
    },
  },
];
