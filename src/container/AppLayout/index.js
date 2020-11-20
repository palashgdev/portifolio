import React, { useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../../container/Footer';
import DrawerWindow from '../DrawerWindow';

import Store from '../../Store/getStore';
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal';
import SubScriberModalContent from '../../container/Subscriber';

const AppLayout = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false);

  const { darkMode, prompt } = useContext(Store);
  const { getDarkMode, switchToLightMode, switchToDarkMode } = darkMode;
  const { push } = useHistory();

  const onClickDarkModeHandler = useCallback(() => {
    if (getDarkMode) {
      switchToLightMode();
    } else {
      switchToDarkMode();
    }
  }, [getDarkMode, switchToDarkMode, switchToLightMode]);

  const onClickAddToHomeScreenHandler = useCallback(() => {
    const { getPrompt, setPrompt } = prompt;

    const deferredPrompt = getPrompt;

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setPrompt(null);
    });
  }, [prompt]);

  const scrollIntoView = useCallback(element => {
    const el = document.getElementById(element);
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {drawer ? (
        <DrawerWindow
          {...{
            darkMode: getDarkMode,
            onClickAddToHomeScreenHandler,
            onClickDarkModeHandler,
            setDrawer,
          }}
        />
      ) : (
        <>
          <Header
            {...{
              onClickAboutHandler: () => scrollIntoView('aboutMe'),
              onClickPortfolioHandler: () => scrollIntoView('portfolio'),
              onClickBlogsHandler: () => push('/blogs'),
              setDrawer,
              onClickLogoHandler: () => push('/'),
            }}
          />

          {children}

          <Footer
            {...{
              subscribeOnClickHandler: setSubscribeModal,
            }}
          />

          <Modal
            {...{
              setModal: setSubscribeModal,
              showModal: subscribeModal,
            }}
          >
            <SubScriberModalContent />
          </Modal>
        </>
      )}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppLayout;
