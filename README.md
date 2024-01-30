#### About
This is a simple boilerplate for [next.js](https://nextjs.org/) applications based on a layered-architecture structure. It's meant to be easily scalable and flexible, avoiding initial-phase projects' common discussions, while also being beginner-friendly. It helps front-ends that need to communicate with back-ends iterate faster with a ready-to-use structure. The design comes from my own experience dealing with different approaches, cultures and stages of front-end applications on different companies.

#### Instructions
To start a new project from this template:

1. Clone the repository w/ `git clone git@github.com:antoniopataro/layered-nextjs.git`;
2. Install its dependencies w/ `npm install` or other package manager you might wanna use with `nodejs` on version `>=^18`;
3. Either run `npm run dev` for a development version or `npm run build && npm start` for a bundled static version;
4. To see changes live on a local server, edit the `./src/app/page.tsx` component;
5. To set-up custom service clients, create a service or edit the `api-service.ts` the `./src/services/` folder and resolve its dependencies under `./src/core/ioc/container.ts`, where you'll probably wanna change the default values;
6. To add routes and hooks to make external requests, create an `use-case` with its own path and typings, followed by a `hook` to call within your `.tsx` components, both under the `src/application/` folder.

#### Tech
- commitlint;
- eslint;
- husky;
- jest;
- lint-staged;
- prettier;
- react.js;
- tailwindcss;
- testing-library;
- typescript.
