import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --purple: ${({ theme }) =>
      theme.isDarkMode ? "rgba(77, 62, 107, 0.5)" : "#4D3E6B"}; ;
    --background:${({ theme }) => (theme.isDarkMode ? "#2E0054" : "#FAEDFF")};
    --background-secondary: ${({ theme }) =>
      theme.isDarkMode ? "rgba(77, 62, 107, 0.8)" : "#FFFFF1"};
    --background-tertiary: ${({ theme }) =>
      theme.isDarkMode ? "#EF9F05" : "#2E0054"};
    --purple-dark: #2E0054;
    --text-color: ${({ theme }) => (theme.isDarkMode ? "#FFFFF1" : "#2E0054")};
    --text-color-secondary: ${({ theme }) =>
      theme.isDarkMode ? "#2E0054" : "#FFFFF1"};
    --text-color-tertiary: ${({ theme }) =>
      theme.isDarkMode ? "#2E0054" : "#EF9F05"};
    --yellow: #EF9F05;
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
    background: var(--background);
  }
`;

export default GlobalStyle;
