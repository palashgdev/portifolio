import React from 'react';
import PropTypes from 'prop-types';

import SliderWrapper from './styles/SlideImageWrapper';
import SlideImage from './styles/SlideImage';
import Slide from './styles/Slide';
import Article from './styles/Article';
import Button from "../Common/Button";

const Slides = ({ handleSlideClick, slides, current }) => {
  const slide = React.createRef();

  const handleSlideClickHandler = event => {
    handleSlideClick(slides.index);
  };

  const imageLoaded = event => {
    event.target.style.opacity = 1;
  };

  const { src, buttonLink, headline, index } = slides;

  return (
    <Slide
      ref={slide}
      onClick={handleSlideClickHandler}
      current={current === index}
    >
      <SliderWrapper>
        <SlideImage alt={headline} src={src} onLoad={imageLoaded} />
      </SliderWrapper>

      <Article>
        <h2>{headline}</h2>
        <Button
          onClick={() => {
            window.open(buttonLink, '_blank');
          }}
        >
          Link
        </Button>
      </Article>
    </Slide>
  );
};

Slides.propTypes = {
  handleSlideClick: PropTypes.func.isRequired,
  slides: PropTypes.shape({
    index: PropTypes.number.isRequired,
    headline: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  current: PropTypes.number.isRequired,
};

export default Slides;
