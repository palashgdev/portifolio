import React from "react";
import PropTypes from "prop-types";

import Title from "../styles/Title";
import SliderContainer from "../styles/SliderContainer";
import Slide from "../styles/Slide";
import Button from "../../../../components/Common/Button";

const Palash = ({ onClickCVHandler }) => (
  <>
    <Title>I&apos;m Palash</Title>
    <SliderContainer>
      <h3 style={{
        fontWeight: "normal"
      }}>Passionate Developer who love</h3>
      <Slide>
        <div>games.</div>
        <div>code.</div>
        <div>eating.</div>
      </Slide>
    </SliderContainer>
    <Button aria-label="Download my CV" aria-haspopup="true" role="button" onClick={onClickCVHandler}>Download CV</Button>
  </>
);

Palash.propTypes = {
  onClickCVHandler: PropTypes.func.isRequired
};

export default Palash;
