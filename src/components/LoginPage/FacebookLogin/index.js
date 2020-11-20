import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FaceBookIcon from '../../../icons/Footer/FaceBookIcon';

const Container = styled.div`
  cursor: pointer;
`;

const FacebookLogin = ({ onClickHandler }) => (
  <Container onClick={onClickHandler}>
    <FaceBookIcon
      style={{
        width: '48px',
        height: '48px',
      }}
    />
  </Container>
);

FacebookLogin.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default FacebookLogin;
