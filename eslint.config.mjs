// ESLint flat config. Next.js 16 removed `next lint`, and @next/eslint-plugin-next
// now ships flat config by default, so this replaces the old .eslintrc.json.
// `eslint-config-next/core-web-vitals` already bundles the typescript-eslint,
// react, react-hooks, and jsx-a11y recommended sets.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";

const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  {
    // Flat config scopes plugins per object, so the plugin has to be registered
    // in the same object that sets its rules.
    files: ["**/*.{ts,tsx,mts,cts}"],
    plugins: { "@typescript-eslint": tseslint.plugin },
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
    },
  },
];

export default config;
