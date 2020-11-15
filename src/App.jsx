import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ContextProvider } from './context'

import { colors } from './shared/variables'
import ViewHandler from './app/ViewHandler/ViewHandle'

import zoovuBg from './images/zoovu-bg.svg'
import CamptonBold from './fonts/Campton-Bold.woff2'
import CamptonLight from './fonts/Campton-Light.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Campton';
    src: url(${CamptonLight}) format('woff2'), url('./fonts/Campton-LightDEMO/font.woff') format('woff');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Campton';
    src: url(${CamptonBold}) format('woff2');
    font-weight: 700;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, header, footer {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  button, html [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
    border: none;
    background: none;
  }
  * {
    box-sizing: border-box;
  }
  a, button, span, div, i {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  a, button, i {
    user-select: none;
  }
  html, body {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 320px;
  }
  body {
    font-family: Campton, Helvetica, Arial, sans-serif;
    background: linear-gradient(180deg, #FDFDFE 0%, #F2F4F7 100%);
    overflow: hidden;
    color: ${colors.dark};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url(${zoovuBg}) no-repeat center;
      background-size: cover;
      opacity: 0.6;
      z-index: -1;
    }
  }
  html, body, #root {
    height: 100%;
  }

  #root {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`

function App () {
  return (
    <ContextProvider>
      <GlobalStyle />
      <ViewHandler />
    </ContextProvider>
  )
}

export default App
