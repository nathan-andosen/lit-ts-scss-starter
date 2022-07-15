# lit-ts-scss-codeceptjs-starter

Seed app that has a very simple setup using Lit + TS + SCSS + CodeceptJs + Mocha that uses rollup.

## Key features

* Typescript
* Scss - with inline font icons (base64 encoded)
* Dev server - detect file changes and reload browser
* E2e tests - using CodeceptJs written in Typescript
* Unit tests - using Mocha & Chai
* Single distribution file
* ESLint

## Getting started

1. Clone the repository:

```
git clone https://github.com/nathan-andosen/lit-ts-scss-codeceptjs-starter.git my-component-name
```

2. Remove the git origin:

```
cd my-component-name
git remote rm origin
```

3. Install dependencies:

```
npm install
```

### Development

* `npm run dev` - Start a web server, watch for file changes, reload browser on change
* `npm run test` or `npm run test:watch` - Run unit tests
* `npm run e2e` - Run the e2e tests
* Production builds:
  * `npm run build:patch` - Increase patch version number and build
  * `npm run build:minor` - Increase minor version number and build
  * `npm run build:major` - Increase major version number and build

