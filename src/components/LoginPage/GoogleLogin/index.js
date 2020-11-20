import React from "react";
import PropTypes from "prop-types";

import Icon from "./styles/Icon";

import GoogleIcon from "../../../icons/Login/Google";

const Login = ({ onClickHandler }) => (
  <Icon onClick={onClickHandler}>
    <GoogleIcon />
  </Icon>
);

Login.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default Login;
