# Layout renderer & redactie Starterkit Website - README

Starterkit website build with ExpressJS, NextJS, Apollo GraphQL and the layout renderer.


## 1 Local Development

To run the app locally there are two options with or without `docker-compose`.

### 1.1 Without docker-compose (Mac)

- Install node version `16.x.x` (tip: use [n](https://github.com/tj/n) to manage different node versions).
- Create `.env` file (see 1.3 ENV Variables)
- `npm install`
- `npm start`
- Server is running on `http://localhost:3000`

### 1.2 With docker-compose

- Install _Docker_ and _Docker Compose_ (easiest way is to install Docker Desktop versions).
- Set ENV variables (see **2 ENV Variables**)
- Run \$`docker-compose up`
- Application is running on `localhost:5000`

### 1.3 ENV Variables

Define ENV variables in `.env` file (create the file if it don't exist).

Required ENV variables:

- PORT=`3000`
- NODE_ENV=`development`
- WCMV4_URL=https://api-gw-a.antwerpen.be/acpaas/wcm-proxy/v4
- API_KEY=
- WCMV4_SITE_ID=

## 2 Testing

- Run \$`npm run tests` to run tests
- Run \$`npm run test:watch` to use --watch for running tests
- Run \$`npm run coverage` to run tests with coverage

## 3 Code Styling / Linting

### 3.1 Editorconfig

Using editorconfig for automatic indentation.
See http://editorconfig.org/#download to install it for your editor.

### 3.2 ESLint

- Run \$`npm run lint` to fix eslint issues
- Better: integrate Eslint in your text editor https://eslint.org/docs/user-guide/integrations

### 3.3 Prettier

- Run \$`npm run prettier` to run prettier checks
- Better: integrate Prettier in your text editor https://prettier.io/docs/en/editors.html

## 4 Conventions

### 4.1 Naming

- Javascript/JSON files
  - lowercase separated by dots for JS files e.g. `date.utils.js`
- Use resource in plurial in files e.g. `contacts.controller.js`, `contacts.router.js`, ...

### 4.2 Git

Continuous work: `development` branch.

Features and bug fixes from the `development branch` (e.g. `feature/<NAME>`, `bugfix/<NAME>`) and merged to `development` with a pull request.
After each sprint merge the acceptance build in the `master` branch.
Tag every build with version `x.y.z` e.g.: `git tag -a v0.7.1 -m "<DESCRIPTION>"`.
Hotfixes are direct fixes from `master` branch (e.g. `hotfix/<NAME>`).

### Folder structure

- Layout renderer: New widgets should be defined in `src/views/components/Widgets.js`
- Layouts are in `src/views/layouts`

