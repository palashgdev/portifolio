import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../icons/Logo';

import Container from './styles/Container';
import Content from './styles/Content';
import HamBurger from './styles/HamburgerMenu';
import ButtonContainer from './styles/ButtonContainer';
import Button from './styles/Button';
import LogoContainer from './styles/LogoContainer';

import { useLocation } from 'react-router-dom';

const Header = ({
  setDrawer,
  onClickAboutHandler,
  onClickLogoHandler,
  onClickPortfolioHandler,
  onClickBlogsHandler,
}) => {
  const [scroll, setScroll] = useState(0);
  const { pathname } = useLocation();

  const isValidRoutes = ['/'];

  const setScrollHandler = useCallback(
    scroll => {
      setScroll(scroll);
    },
    [setScroll],
  );

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollHandler(window.pageYOffset);
      // if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      //   console.log("you're at the bottom of the page");
      //   //show loading spinner and make fetch request to api
      // }
    });

    return () => {
      document.removeEventListener('scroll', () => {
        setScrollHandler(window.pageYOffset);
      });
    };
  }, [setScrollHandler]);

  return (
    <Container aria-label="Header" role="banner" getScroll={scroll}>
      <Content getScroll={scroll}>
        <LogoContainer onClick={onClickLogoHandler}>
          <Logo />
        </LogoContainer>

        {!(isValidRoutes.find(e => e === pathname) === undefined) && (
          <ButtonContainer>
            <Button onClick={onClickAboutHandler}>About</Button>
            <Button onClick={onClickPortfolioHandler}>Portfolio</Button>
            {/* <Button onClick={onClickBlogsHandler}>Blogs</Button> */}
          </ButtonContainer>
        )}

        <HamBurger
          onClick={e => {
            e.persist();
            const parent = e.target.parentNode;
            parent.classList.add('open');
            setDrawer(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamBurger>
      </Content>
    </Container>
  );
};

Header.propTypes = {
  setDrawer: PropTypes.func.isRequired,
  onClickAboutHandler: PropTypes.func.isRequired,
  onClickLogoHandler: PropTypes.func.isRequired,
  onClickPortfolioHandler: PropTypes.func.isRequired,
  onClickBlogsHandler: PropTypes.func.isRequired,
};

export default Header;
