import React from "react";
import PropTypes from "prop-types";

const Logo = ({ style }) => (
  <svg
    style={{ ...style }}
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle id="bigCircle" cx="26" cy="26" r="26" fill="#322C5B" />
    <path
      d="M22.7529 29.7637V37H17.6113V15.6719H26.1221C27.7529 15.6719 29.1934 15.9746 30.4434 16.5801C31.7031 17.1758 32.6748 18.0303 33.3584 19.1436C34.0518 20.2471 34.3984 21.502 34.3984 22.9082C34.3984 24.9883 33.6514 26.6533 32.1572 27.9033C30.6729 29.1436 28.6318 29.7637 26.0342 29.7637H22.7529ZM22.7529 25.7939H26.1221C27.1182 25.7939 27.875 25.5449 28.3926 25.0469C28.9199 24.5488 29.1836 23.8457 29.1836 22.9375C29.1836 21.9414 28.915 21.1455 28.3779 20.5498C27.8408 19.9541 27.1084 19.6514 26.1807 19.6416H22.7529V25.7939Z"
      fill="white"
    />
    <circle cx="38.5" cy="34.5" r="2.5" fill="white" />
  </svg>
);

Logo.propTypes = {
  style: PropTypes.object
};

Logo.defaultProps = {
  style: {}
};

export default Logo;
