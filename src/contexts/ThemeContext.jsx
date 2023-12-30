import React from 'react';

const defaultValue = {
  currentTheme: 'light',
  changeCurrentTheme: () => {},
};

const ThemeContext = React.createContext(defaultValue);

export default ThemeContext;