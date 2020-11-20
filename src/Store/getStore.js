import React from 'react';

export default React.createContext({
  darkMode: {
    getDarkMode: false,
    switchToDarkMode: () => {},
    switchToLightMode: () => {},
  },
  prompt: {
    getPrompt: null,
    setPrompt: () => {},
  },
  user: {
    loading: false,
    error: false,
    value: {},
  },
});
