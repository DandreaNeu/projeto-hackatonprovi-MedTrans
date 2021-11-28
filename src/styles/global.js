import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: none;
    }

    body {
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    :root {
        --blue: #005DDE;
        --blue-light: #D7E1F3;
        --blue-dark: #1A254D;
        --gray-light: #EBEDF2;
        --gray: #A4A7B2;
        --red: #F51A24;
        --pink: #F7B4C4;
        --white: #ffffff;
    }
`;

export default GlobalStyle;
