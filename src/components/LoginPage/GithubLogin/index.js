import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import GithubIcon from '../../../icons/Footer/GithubIcon';
const IconContainer = styled.div`
  cursor: pointer;
`;

const GithubLogin = ({ onClickHandler }) => (
  <IconContainer onClick={onClickHandler}>
    <GithubIcon
      style={{
        width: '48px',
        height: '48px',
      }}
    />
  </IconContainer>
);

GithubLogin.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default GithubLogin;
