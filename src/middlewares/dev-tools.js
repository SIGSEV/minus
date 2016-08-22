export default (process.env.BROWSER && window.devToolsExtension)
  ? window.devToolsExtension()
  : f => f
