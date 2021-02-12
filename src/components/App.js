import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedThemeHook from '../hooks/persistedTheme';
import dark from '../themes/dark';
import sprite from '../assets/symbol-defs.svg';
import GlobalStyle from '../themes/GlobalStyles';
import light from '../themes/light';
import AppBar from './appBar/AppBar';
import Content from './content/Content';

const App = () => {
  const [theme, setTheme] = usePersistedThemeHook('phonebookTheme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppBar />
        <Content />

        <label className="switch">
          <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme.title === 'dark'}
          />
          <div className="slider "></div>
          <div className="round">
            <svg width="16px" height="15px">
              <use href={sprite + '#brightness'} />
            </svg>
          </div>
        </label>
      </ThemeProvider>
    </>
  );
};

export default App;
