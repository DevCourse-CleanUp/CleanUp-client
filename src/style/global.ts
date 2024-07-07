import {createGlobalStyle} from 'styled-components';
import { getTheme } from './globalStyle';

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

    * {
        color: ${getTheme().color.text1};
    }
`;