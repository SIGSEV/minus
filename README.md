<p align="right">
  <a href="http://starveller.sigsev.io/SIGSEV/minus">
    <img src="http://starveller.sigsev.io/api/repos/SIGSEV/minus/badge">
  </a>
  <a href="https://github.com/SIGSEV/minus">
    <img src="https://img.shields.io/badge/scaffold-minus-blue.svg?style=flat-square">
  </a>
</p>

<h1 align="center">minus</h1>
<p align="center">Minimalist starter for isomorphic apps</p>

- **No. Fucking. Bullshit.** Just the code.
- **100%** ES6/ES7
- **100%** isomorphic — page is rendered server side for initial load
- Use [React](https://github.com/facebook/react), [Redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router)
- Fully linted, with large amount of [eslint](https://github.com/eslint/eslint) rules
- Happy developer experience:
  - Client hot reloading for **components**, **styles**, **actions** and **reducers**
  - Out-of-the-box support of [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  - Ready to use build system, with assets renaming and optimizations

### Usage

Launch the dev environment:

    yarn start

Launch the build:

    yarn build

Launch the app in prod mode:

    yarn prod

If you want to see more commands, just read the fucking `package.json`.

### SSR data loading

To do async operations before SSR, you can define a `load` prop on your
route object, which receive the store and returns a Promise.

```js
// src/routes.js

export default [
  ...
  {
    path: '/foo-route',
    component: FooComponent,
    load: async ({ dispatch, getState }) => {
      // do whatever you want.
    }
  }
]
```
