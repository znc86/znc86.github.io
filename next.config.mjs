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
  swcMinify: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": process.cwd(),
    };
    return config;
  },
};
export default config;
