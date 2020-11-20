import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

const Image = styled.img`
  display: block;
  width: 100%;

  filter: ${({ theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return 'grayscale(0.85)';
    }
    return 'grayscale(0)';
  }};
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  @media screen and (min-width: 50rem) {
    height: 100%;
  }
`;

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add('loaded');
  };

  const onError = event => {
    event.target.classList.add('has-error');
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          },
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return <Image ref={setImageRef} src={imageSrc} alt={alt} onLoad={onLoad} onError={onError} />;
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
