import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from "../Styles";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

	const toggleTheme = () => {
    setThemeMode(prevState => {
      if (prevState === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }
	
  const value = { toggleTheme, themeMode };
	const userTheme = theme[themeMode];

  return (<AppContext.Provider value={value}>
		<ThemeProvider theme={userTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	</AppContext.Provider>);
};

export default AppProvider;
