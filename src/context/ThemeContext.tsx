import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ChildrenType } from '../@types/children';
import { ThemeContextType } from '../@types/themeContext';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ChildrenType) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={{ isDarkMode }}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
