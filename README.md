# fareeds-remix-app

Documentation links:

- Application framework: [Remix](https://remix.run/docs) • [Remix Flat Routes](https://github.com/kiliman/remix-flat-routes)
- Styling: [Tailwind CSS](https://tailwindcss.com/docs/utility-first) • [Headless UI](https://headlessui.com)
- Language features: [TypeScript](https://www.typescriptlang.org/docs/) • [Eslint](https://eslint.org/docs/latest/) • [Prettier](https://prettier.io/docs/en/index.html)
- Unit testing: [Vitest](https://vitest.dev/api/) • [React Testing Library](https://testing-library.com/docs/react-testing-library/api)
- Integration testing: [Playwright](https://playwright.dev/docs/api/class-test)

If you are in doubt about how to do something with Remix, see if there is an existing example in the [Remix Blues Stack](https://github.com/remix-run/blues-stack), which is a basic blog app with authentication, CI, etc.

## Development

From your terminal:

```sh
cd packages/assessment
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
docker build -t fareeds-remix-app .
docker run --rm -e SESSION_SECRET=some_secret -p 3000:3000 fareeds-remix-app:latest package_name
```

