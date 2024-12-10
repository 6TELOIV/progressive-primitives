// @ts-check

import jsxA11y from "eslint-plugin-jsx-a11y";
import tailwind from "eslint-plugin-tailwindcss";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import hooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(
  {
    ignores: [".next/*", "**/node_modules/**"],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tailwind.configs["flat/recommended"],
  {
    name: "react-recommended",
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    /* @ts-expect-error react plugin doesn't have proper types  */
    ...reactPlugin.configs.flat.recommended,
    rules: {
      /* @ts-expect-error react plugin doesn't have proper types  */
      ...reactPlugin.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    plugins: {
      /* @ts-expect-error react plugin doesn't have proper types  */
      react: reactPlugin,
    },
  },
  {
    name: "react-hooks",
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...hooksPlugin.configs.recommended,
    plugins: {
      "react-hooks": hooksPlugin,
    },
  },
  {
    name: "jsx-a11y-strict",
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...jsxA11y.flatConfigs.strict,
  },
  {
    name: "next",
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...nextPlugin.configs.recommended,
    plugins: {
      "@next/next": nextPlugin,
    },
  }
);
