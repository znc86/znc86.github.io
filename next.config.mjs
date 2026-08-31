import nexti18next from "./next-i18next.config.js";

const { i18n } = nexti18next;

// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  i18n,
  reactStrictMode: true,
  // Turbopack is the default bundler in Next 16. This replaces the old custom
  // `webpack` function, which only existed to run raw-loader over the markdown
  // in `docs/` (its `~` alias was dead config and is gone).
  turbopack: {
    rules: {
      "*.md": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
};
export default config;
