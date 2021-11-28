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
`;

export default GlobalStyle;
