import styled from '@emotion/styled';

const Rectangle = styled.div`
  width: 27vh;
  height: 27vh;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { background } = darkColors;

    if (darkMode.getDarkMode) {
      return `linear-gradient(
      272.31deg,
      ${background.primary.normal} 0.88%,
      ${background.primary.light} 64.09%,
      ${background.primary.lighter} 98.76%
    ),
    #fbd954`;
    } else {
      return `linear-gradient(
      272.31deg,
      #e49f01 0.88%,
      #fec900 64.09%,
      rgba(255, 255, 255, 0) 98.76%
    ),
    #fbd954`;
    }
  }};

  border: 5px solid #ffffff;
  border-radius: 3rem;
  transform: rotate(19.17deg);

  position: absolute;
  bottom: -30%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1;

  @media screen and (min-width: 50rem) {
    top: 38%;
    left: -30%;
    bottom: unset;
    right: unset;

    width: 15rem;
    height: 15rem;

    transform-origin: center center;
    border-radius: 4rem;
  }

  @media screen and (min-width: 75rem) {
    top: 34%;
    left: -30%;
    bottom: unset;
    right: unset;

    width: 33vh;
    height: 33vh;

    transform-origin: center center;
    border-radius: 4rem;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    border-radius: 1.5rem;

    width: 35vh;
    height: 35vh;
  }
`;

export default Rectangle;
