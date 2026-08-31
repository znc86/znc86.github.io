# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Toolchain

| Tool | Version | Enforced by |
| --- | --- | --- |
| Node.js | >= 24 | `devEngines.runtime` in `package.json` (`onFail: error`) + `engine-strict=true` in `.npmrc` |
| npm | >= 12 | `devEngines.packageManager` (`onFail: warn`) |

`.node-version` and `.tool-versions` declare `24.20.0` for version managers that read them
(mise, asdf, fnm, nodenv, and most CI/host build images). Note that **Volta reads neither** —
it only honors a `volta` field in `package.json`, so a Volta user must select Node 24 themselves.
The `devEngines.runtime` check is the real backstop: any `npm` command on Node < 24 fails outright.

npm is the only supported package manager here; other lockfiles are gitignored. Install with:

```sh
npm ci        # reproducible install from package-lock.json
npm install   # only when changing dependencies
```

Dependency lifecycle scripts (`preinstall`/`install`/`postinstall`) never run on install: npm 12
blocks them by default, and `ignore-scripts=true` in `.npmrc` keeps that guarantee on npm 11.
Scripts in this repo's own `package.json` are unaffected and run normally via `npm run`.

Two dependencies declare React 15/16 peer ranges but work on React 18, so `overrides` in
`package.json` pins their `react`/`react-dom` to the root versions. Without that, npm's strict
peer resolution refuses to install.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
