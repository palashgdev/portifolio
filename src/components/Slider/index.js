import React, { useState } from "react";
import PropTypes from "prop-types";

import Container from "./styles/Container";
import SliderWrapper from "./styles/SliderWrapper";
import SliderControlWrapper from "./styles/SliderControlsWrapper";
import SliderControl from "./SliderControl";
import Slides from "./Slides";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = index => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <Container>
      <SliderWrapper
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map(slide => {
          return <Slides key={slide.index} slides={slide} current={current} handleSlideClick={handleSlideClick} />;
        })}
      </SliderWrapper>

      <SliderControlWrapper>
        <SliderControl type="previous" handleClick={handlePreviousClick} />

        <SliderControl type="next" handleClick={handleNextClick} />
      </SliderControlWrapper>
    </Container>
  )
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    headline: PropTypes.string.isRequired
  })).isRequired
}

export default Slider;