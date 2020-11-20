import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';

import Button from './styles/Button';
import ButtonContainer from './styles/ButtonContainer';

const SidePanel = ({ onClickCreatePostHandler, onClickTagsHandler }) => (
  <Container>
    <ButtonContainer onClick={onClickCreatePostHandler}>
      <Button>Create Post</Button>
    </ButtonContainer>

    <ButtonContainer onClick={onClickTagsHandler}>
      <Button>Tags</Button>
    </ButtonContainer>
  </Container>
);

SidePanel.propTypes = {
  onClickCreatePostHandler: PropTypes.func.isRequired,
  onClickTagsHandler: PropTypes.func.isRequired,
};

export default SidePanel;
