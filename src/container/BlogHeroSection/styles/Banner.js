import styled from '@emotion/styled';

const Banner = styled.img`
  background: ${({ downloadUrl }) => `url(${downloadUrl}) fixed`};

  height: ${({ imageLoaded }) => {
    if (imageLoaded) {
      return '100%';
    }
    return '0px';
  }};

  width: ${({ imageLoaded }) => {
    if (imageLoaded) {
      return '100%';
    }
    return '0px';
  }};

  display: ${({ imageLoaded }) => {
    if (!imageLoaded) {
      return 'none';
    }
    return 'block';
  }};

  max-height: 80vh;

  transform: translateZ(-20px) scale(1);
  z-index: 1;
  position: relative;

  filter: ${({ theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;

    if (getDarkMode) {
      return 'grayscale(0.5)';
    } else {
      return 'grayscale(0)';
    }
  }};

  @media screen and (min-width: 50rem) {
    object-fit: cover;
  }
`;

export default Banner;
