import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #1C1C1C;
    --white-0: #FFFFFF;
    --white-50: #EEEEEF;
    --gray-100: #8e8e93;
    --gray-800: #333333;
    --yellow-800: #FFAE1B;
    --green-300: #79ad3e;
    --green-800: #015543;
    --red-600: #FF3B30
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--white-0);
    font-family: Inter, sans-serif;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font-family: Inter, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  main {
    height: 100vh;
  }
`;
