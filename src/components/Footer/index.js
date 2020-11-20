import React from 'react';
import PropTypes from 'prop-types';

import TwitterIcon from '../../icons/Footer/TwitterIcon';
import FaceBookIcon from '../../icons/Footer/FaceBookIcon';
import InstagramIcon from '../../icons/Footer/InstagramIcon';
import LinkedinIcon from '../../icons/Footer/LinkedinIcon';
import GithubIcon from '../../icons/Footer/GithubIcon';
import GitlabIcon from '../../icons/Footer/GitlabIcon';

import Container from './styles/Container';
import FooterWrapper from './styles/FooterWrapper';
import Icon from './styles/Icon';
import CheckBoxContainer from './styles/CheckBoxContainer';
import Span from './styles/Span';
import DarkModeIcons from './styles/DarkModeIcons';

import Button from '../Common/Button';

const Footer = ({ onClickHandler, darkMode, subscribeOnClickHandler }) => {
  const FooterIcon = [
    {
      icon: GitlabIcon,
      color: '#fc6d27',
      to: 'https://gitlab.com/palashgdev',
      description: "Gitlab Profile"
    },
    {
      icon: FaceBookIcon,
      color: '#3b5998',
      to: 'https://www.facebook.com/palashgdev',
      description: "Facebook profile"
    },
    {
      icon: TwitterIcon,
      color: '#1DA1F2',
      to: 'https://twitter.com/palashgdev',
      description: "Twitter profile"
    },
    {
      icon: InstagramIcon,
      color: '#E1306C',
      to: 'https://www.instagram.com/palashgdev/?hl=en',
      description: "Instagram Profile"
    },
    {
      icon: GithubIcon,
      color: '#767676',
      to: 'https://github.com/palashgdev',
      description: "github Profile"
    },
    {
      icon: LinkedinIcon,
      color: '#0077B5',
      to: 'https://www.linkedin.com/in/palashgdev/',
      description: "linkedin profile"
    },
  ];

  return (
    <Container>
      <FooterWrapper icons>
        {FooterIcon.map(e => (
          <Icon aria-label={e.description} rel="noopener" href={e.to} target="_blank" key={e.icon.toString()} color={e.color} role="button">
            {<e.icon />}
          </Icon>
        ))}
      </FooterWrapper>

      <FooterWrapper>
        <Button aria-modal="true" role="dialog" aria-label="Subscribe to me" aria-haspopup="true" onClick={subscribeOnClickHandler}>Subscribe</Button>

        <Span>
          made with&nbsp;
          <span aria-label="love" role="img">
            ❤️
          </span>
          &copy; palashgdev
        </Span>

        <CheckBoxContainer>
          <DarkModeIcons>{darkMode ? '☀️' : '🌙'}</DarkModeIcons>
          <input onChange={onClickHandler} checked={darkMode} type="checkbox" />
          <span onClick={onClickHandler} className="check"></span>
        </CheckBoxContainer>
      </FooterWrapper>
    </Container>
  );
};

Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  subscribeOnClickHandler: PropTypes.func.isRequired,
};
export default Footer;
