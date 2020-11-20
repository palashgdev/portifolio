import React from "react";
import PropTypes from "prop-types";

const QuaterCircle = () => (
  <svg
    width="78"
    height="72"
    viewBox="0 0 78 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M78 38.3049V0.0998966C15.6 -2.50746 0 46.5737 0 71.4401C11.9673 71.8626 36.0112 72.4541 36.4486 71.4401C35.8654 39.4276 63.9065 36.0114 78 38.3049Z"
      fill="#F5F4F7"
    />
  </svg>
);

QuaterCircle.propTypes = {
  style: PropTypes.object
};

QuaterCircle.defaultProps = {
  style: {}
};

export default QuaterCircle;
