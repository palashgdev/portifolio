import React from 'react';
import PropTypes from 'prop-types';

const FaceBookIcon = ({ style }) => (
  <svg style={{ ...style }} width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.42086 4.2607C2.42086 4.81511 2.42086 7.28967 2.42086 7.28967H0V10.9935H2.42086V22H7.39381V10.9938H10.7309C10.7309 10.9938 11.0434 9.21785 11.1949 7.27601C10.7606 7.27601 7.41262 7.27601 7.41262 7.27601C7.41262 7.27601 7.41262 5.12124 7.41262 4.74355C7.41262 4.36504 7.95482 3.8559 8.49072 3.8559C9.02561 3.8559 10.1545 3.8559 11.2002 3.8559C11.2002 3.35162 11.2002 1.60921 11.2002 1.32306e-08C9.80429 1.32306e-08 8.21624 1.32306e-08 7.51624 1.32306e-08C2.29793 -0.000255734 2.42086 3.70726 2.42086 4.2607Z"
      fill="#AEAEB0"
    />
  </svg>
);

FaceBookIcon.propTypes = {
  style: PropTypes.object,
};

FaceBookIcon.defaultProps = {
  style: {},
};

export default FaceBookIcon;
