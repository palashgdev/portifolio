import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import GlobalState from './getStore';
import getPreColorScheme from '../lib/getPrefColorScheme';
import darkModeReducer from '../reducers/darkMode';
import { switchToDarkMode, switchToLightMode } from '../actions/DarkMode';
import useAuth from '../hooks/useAuth';
import firebase from '../firebase';

const Store = ({ children }) => {
  const [{ getDarkMode }, dispatch] = useReducer(darkModeReducer, {
    getDarkMode: getPreColorScheme(),
  });

  const [prompt, setPrompt] = useState(null);
  const [user, loading, error] = useAuth(firebase.auth);

  return (
    <GlobalState.Provider
      value={{
        darkMode: {
          getDarkMode,
          switchToDarkMode: switchToDarkMode(dispatch),
          switchToLightMode: switchToLightMode(dispatch),
        },
        prompt: {
          getPrompt: prompt,
          setPrompt,
        },
        user: {
          error,
          loading,
          value: user,
        },
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Store;
