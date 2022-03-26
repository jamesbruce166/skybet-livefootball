import { createGlobalStyle } from 'styled-components';
import { PRIMARY_DARK } from './variables.styles';

const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
    padding: 0;
    background: ${PRIMARY_DARK};
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
