import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'emotion-theming';

import Store from '../Store/getStore';

const Theme = ({ children }) => {
  const { darkMode } = useContext(Store);

  const theme = {
    darkMode: {
      ...darkMode,
    },
    darkColors: {
      background: {
        primary: {
          normal: 'black',
          light: '#383130',
          lighter: '#363636',
        },
      },
      text: {
        primary: {
          normal: 'rgba(255,255,255,1)',
          light: 'rgba(255,255,255,.87)',
          lighter: 'rgba(255,255,255,.6)',
        },
        secondary: {
          normal: 'rgba(246, 201, 14,1)',
          light: 'rgba(246, 201, 14,.87)',
          lighter: 'rgba(246, 201, 14,.6)',
        },
      },
    },
    lightColors: {
      background: {
        primary: {
          normal: 'white',
          light: 'lightgrey',
        },
        secondary: {
          normal: '#002aff',
        },
      },
      text: {
        primary: {
          normal: 'black',
        },
        secondary: {
          normal: '#717171',
        },
      },
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.any,
};
export default Theme;
