# tryout-vue3-threejs-drie

__Trying out Drie, a react-three-fiber-like Three.js component library for Vue.js.__

-&nbsp; __Version:__ 0.0.1  
-&nbsp; __Repo:__ <https://github.com/richplastow/tryout-vue-threejs-drie>  
-&nbsp; __Homepage:__ <https://richplastow.com/tryout-vue-threejs-drie>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## How to create a project like this

1. Create the GitHub repo, and in Settings -> Pages -> Branch choose 'main' and
   keep '/ (root)'
2. `git clone git@github.com:<GITHUB_USERNAME>/tryout-vue3-threejs-drie.git`
3. `cd tryout-vue3-threejs-drie`
4. Follow the ['Creating a Vue Application' Quick Start:
   ](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
   ```
   npm init vue@latest

   Need to install the following packages:
     create-vue@3.7.1
   Ok to proceed? (y) 
   
   Vue.js - The Progressive JavaScript Framework
   
   ✔ Project name: … tryout-vue3-threejs-drie
   ✔ Add TypeScript? … Yes
   ✔ Add JSX Support? … Yes
   ✔ Add Vue Router for Single Page Application development? … Yes
   ✔ Add Pinia for state management? … Yes
   ✔ Add Vitest for Unit Testing? … Yes
   ✔ Add an End-to-End Testing Solution? › Playwright
   ✔ Add ESLint for code quality? … Yes
   ✔ Add Prettier for code formatting? … Yes
   
   Scaffolding project in /Users/ ... /tryout-vue-threejs-drie...
   ```
5. Move everything apart from the README.md out of the newly created folder
   into the top level of the repo, and delete that folder
6. In package.json, correct the version and private values, and add
   repository, keywords, author, license, bugs and homepage

<!-- 7. Follow the [Drie Getting Started Guide
   ](https://www.drie.dev/guide/getting-started) to install
   @janvorisek/drie, three and @types/three:  
   10 packages with 0 vulnerabilities, 46.8 MB for 1,999 items
3. Follow the ['Creating a Vue Application' Quick Start:
   ](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
   ```
   Need to install the following packages:
     create-vue@3.7.1
   Ok to proceed? (y) 
   
   Vue.js - The Progressive JavaScript Framework
   
   ✔ Project name: … tryout-vue-threejs-drie
   ✔ Add TypeScript? … Yes
   ✔ Add JSX Support? … Yes
   ✔ Add Vue Router for Single Page Application development? … Yes
   ✔ Add Pinia for state management? … No
   ✔ Add Vitest for Unit Testing? … Yes
   ✔ Add an End-to-End Testing Solution? › Playwright
   ✔ Add ESLint for code quality? … Yes
   ✔ Add Prettier for code formatting? … Yes
   
   Scaffolding project in /Users/ ... /tryout-vue-threejs-drie...
   ```
4. 

 -->
