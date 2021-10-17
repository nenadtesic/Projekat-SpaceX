import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, Arial, Helvetica;
}

body {
    background-image: url("/images/space3.jfif");
}
`;

export default GlobalStyle