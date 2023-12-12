import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    --main-font: "Nanum Gothic", Helvetica, arial, serif;
    --main-border-radius: 15px;
    --primary-color: #42a5f5;
  }

  * {
    font-family: var(--main-font)
  }
`;

export default GlobalStyle;
