# tryout-vue3-threejs-drie

__Trying out Drie, a react-three-fiber-like Three.js component library for Vue.js.__

-&nbsp; __Version:__ 0.0.1  
-&nbsp; __Repo:__ <https://github.com/richplastow/tryout-vue3-threejs-drie>  
-&nbsp; __Homepage:__ <https://richplastow.com/tryout-vue3-threejs-drie>

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
   '/docs'
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
   
   Scaffolding project in /Users/ ... /tryout-vue3-threejs-drie...
   ```
5. Move everything apart from the README.md out of the newly created folder
   into the top level of the repo, and delete that folder
6. In package.json, correct the version and private values, and add
   repository, keywords, author, license, bugs and homepage
7. `npm install` installs 468 packages with 0 vulnerabilities:  
   199.7 MB for 13,826 items
8. Add `base: '/tryout-vue3-threejs-drie/',` to vite.config.ts
8. `npm run format && npm run dev`  
   and open <http://127.0.0.1:5173/tryout-vue3-threejs-drie/>
10. Assuming you have the NPM module `static-server` installed globally,  
    `npm run build && mv dist tryout-vue3-threejs-drie && static-server`  
    and open <http://127.0.0.1:9080/tryout-vue3-threejs-drie/>
11. `mv tryout-vue3-threejs-drie docs` - ready for GitHub Pages
12. Follow the [Drie Getting Started Guide
   ](https://www.drie.dev/guide/getting-started) to install dependencies
   @janvorisek/drie, three and dev-dependency @types/three:  
   10 packages with 0 vulnerabilities, 46.9 MB for 1,997 items
13. Use the [Drie plugin
    ](https://www.drie.dev/guide/getting-started#vue-3-plugin) by just adding  
    `import drie from '@janvorisek/drie'` and  
    `app.use(drie)` to src/main.ts
14. Replace src/views/HomeView.vue with the [Drie 'Basic setup' example
    ](https://www.drie.dev/examples/basic-setup#code)  
    (the `import`s are not needed, because of `app.use(drie)` in src/main.ts)
15. You should see the blue box, and be able to rotate it by dragging

<!-- 200,173,295 bytes (46.9 MB on disk) for 15,836 items -->