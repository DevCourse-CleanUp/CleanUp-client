import { createGlobalStyle } from "styled-components";
import { getTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${getTheme().color.secondary};
    }

    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
    }

    .canvas {
  height: 100vh;
  left: 0px;
  pointer-events: none;
  position: fixed;
  top: 0px;
  width: 100vw;
}
`;
