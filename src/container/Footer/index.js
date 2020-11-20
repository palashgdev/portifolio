import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import FooterComponent from '../../components/Footer';
import GlobalState from '../../Store/getStore';

const Footer = ({ subscribeOnClickHandler }) => {
  const { darkMode } = useContext(GlobalState);
  const { switchToDarkMode, switchToLightMode, getDarkMode } = darkMode;

  const onClickDarkModeHandler = useCallback(() => {
    if (getDarkMode) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  }, [getDarkMode, switchToDarkMode, switchToLightMode]);

  return (
    <FooterComponent
      {...{
        darkMode: getDarkMode,
        onClickHandler: onClickDarkModeHandler,
        subscribeOnClickHandler,
      }}
    />
  );
};

Footer.propTypes = {
  subscribeOnClickHandler: PropTypes.func.isRequired,
};

export default Footer;
