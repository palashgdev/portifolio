import React from 'react';
import PropTypes from 'prop-types';

import Button from './styles/Button';

const SliderControl = ({ type, handleClick }) => (
  <Button aria-label={type === 'previous' ? "move left" : "move right"} right={type === 'previous' ? true : false} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </Button>
);

SliderControl.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SliderControl;
