import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "./node_modules/eslint-config-dicodingacademy/index.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
];