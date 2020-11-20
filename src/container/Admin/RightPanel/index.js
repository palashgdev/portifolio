import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles/Wrapper';

import CreatePost from './CreatePost';
import Tags from './Tags';
import PleaseChooseOption from './PleaseChoseOption';

const RightPanel = ({ createPost, tags }) => (
  <>
    <Wrapper>
      {createPost && <CreatePost />}
      {tags && <Tags />}

      {!(createPost || tags) && <PleaseChooseOption />}
    </Wrapper>
  </>
);

RightPanel.propTypes = {
  createPost: PropTypes.bool.isRequired,
  tags: PropTypes.bool.isRequired,
};

export default RightPanel;
