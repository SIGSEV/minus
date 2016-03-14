<p align="right">
  <a href="http://starveller.sigsev.io/SIGSEV/minus">
    <img src="http://starveller.sigsev.io/api/repos/SIGSEV/minus/badge">
  </a>
  <a href="https://github.com/SIGSEV/minus">
    <img src="https://img.shields.io/badge/scaffold-minus-blue.svg?style=flat-square">
  </a>
</p>

<h1 align="center">minus</h1>
<p align="center">Minimalist starter for universal apps</p>

- **No. Fucking. Bullshit.** Just the code.
- 100% ES6/ES7 using Babel 6.
- 100% universal — page is rendered server side for initial load
- Use [React](https://github.com/facebook/react), [Redux](https://github.com/rackt/redux) and [react-router](https://github.com/rackt/react-router)
- Fully linted, with large amount of eslint rules
- Happy developer experience:
  - Hot reloading **components**, **styles**, **actions** and **reducers**
  - Out-of-the-box support of redux-devtools chrome extension
  - Ready to use build system, with assets renaming and optimizations

### Examples

- Basic socket.io implementation: [patch](https://gist.github.com/Apercu/7eb5852845e3291f6958)

### Usage

Launch the dev environment (with hot-reloading):

```
npm start
```

Launch the build:

```
npm run build
```

Launch the app in prod mode (with universal rendering):

```
npm run prod
```

If you want to see more commands, just read the fucking `package.json`.
