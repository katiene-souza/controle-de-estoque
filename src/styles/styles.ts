import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --purple: #4D3E6B;
    --purple-light: #FAEDFF;
    --purple-dark: #2E0054;
    --gray: #A6A8AB;
    --dark-gray: #4A4A68;
    --gray-medium: #8C8CA1;
    --gray-light: #D1D1D1;
    --yellow: #EF9F05;
    --yellow-light: #FFFFF1;
    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
    --font-size-xsmall: 0.75rem;
    --font-size-medium: 1.125rem;
    --font-size-xmedium: 1.5rem;
    --font-size-large: 2.5rem;
    --font-size-xlarge: 3rem;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--purple-light);
  }
`;

export default GlobalStyle;