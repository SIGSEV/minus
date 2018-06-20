import { injectGlobal } from 'styled-components'

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    outline: none;
  }
`
