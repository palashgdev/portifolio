import React from "react";
import PropTypes from "prop-types";

import Button from "../../Common/Button";

const LogoutButton = ({ onClickHandler }) => (
  <div>
    <Button onClick={onClickHandler}>Logout</Button>
  </div>
);

LogoutButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default LogoutButton;
