import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import LinkContainer from './styles/LinksContainer';
import Hamburger from './styles/Hamburger';
import GoToLink from './styles/GoToLink';
import Link from './styles/Link';

const DrawerWindow = ({ darkMode, onClickDarkModeHandler, setDrawer, onClickAddToHomeScreenHandler }) => (
  <Container>
    <Hamburger
      onClick={e => {
        const parent = e.target.parentNode;
        parent.classList.remove('open');
        setDrawer(false);
      }}
      className="open"
    >
      <span />
      <span />
      <span />
    </Hamburger>

    <LinkContainer>
      <Link onClick={onClickDarkModeHandler}>{darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</Link>

      <GoToLink to="/login">Login</GoToLink>

      <GoToLink to="/">Home</GoToLink>

      {/* <GoToLink to="/blogs">Blogs</GoToLink> */}

      {/* <Link onClick={onClickAddToHomeScreenHandler}>Add To Home Screen</Link> */}

      {/* <GoToLink to="/blogs">Blogs</GoToLink> */}
    </LinkContainer>
  </Container>
);

DrawerWindow.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onClickDarkModeHandler: PropTypes.func.isRequired,
  setDrawer: PropTypes.func.isRequired,
  onClickAddToHomeScreenHandler: PropTypes.func.isRequired,
};

export default DrawerWindow;
