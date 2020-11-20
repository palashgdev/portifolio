// This file contains all the global styles

import React from 'react';

import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const GlobalStyle = () => {
  const { darkMode, darkColors } = useTheme();
  const { getDarkMode } = darkMode;

  const { background } = darkColors;
  const bodyBackground = getDarkMode ? background.primary.normal : 'white';
  const color = getDarkMode ? 'white' : 'black';

  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          scroll-behavior: smooth;
          overflow-x: hidden;
          background: ${bodyBackground};
          color: ${color};
          transition: ease-in 0.4s;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyle;
