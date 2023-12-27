import { createGlobalStyle } from 'styled-components';

import { colors, font } from './theme';

export default createGlobalStyle`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    appearance: none;
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar-track:horizontal {
    background-color: ${colors.normal.white};
  }

  ::-webkit-scrollbar {
    width: 0.3rem;
    background: ${colors.normal.white};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.normal.black};
  }

  ::-ms-reveal {
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${font.family.Inter};
  }

  html {
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-size: 1.4rem;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  h1 {
    font-size: 2.4rem;
  }

  ul,
  li {
    list-style: none;
  }

  input {
    font-family: ${font.family.Inter};
  }

  textarea {
    resize: none;
  }

  a {
    color: inherit;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
