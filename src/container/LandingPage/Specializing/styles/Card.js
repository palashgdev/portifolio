import styled from '@emotion/styled';

const Card = styled.div`
  position: relative;

  background: ${({ theme, wave }) => {
    const { darkMode, darkColors } = theme;
    if (wave) {
      if (darkMode.getDarkMode) {
        return darkColors.background.primary.normal;
      }
      return `url("/icons/Specializing/WaveCard.svg")`;
    } else {
      if (darkMode.getDarkMode) {
        return darkColors.background.normal;
      } else {
        return 'white';
      }
    }
  }};

  z-index: inherit;

  svg {
    position: absolute;
    top: -20%;
    left: -20%;
    z-index: -1;

    ellipse {
      fill: black;
      fill-opacity: 1;
    }
  }

  border-radius: 10px;
  box-shadow: ${({ theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return '9.84583px 9.84583px 15.0583px rgba(46, 46, 46, 1)';
    }
    return '9.84583px 9.84583px 15.0583px rgba(46, 46, 46, 0.1)';
  }};
  border-style: solid;
  border-color: ${({ theme, color, wave }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;
    if (wave) {
      if (getDarkMode) {
        return 'tomato';
      }
    }
    return color;
  }};

  border-right: none;
  border-top: none;
  border-bottom: none;

  border: ${({ wave, theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;

    if (wave) {
      if (getDarkMode) {
        return '';
      }
      return 'none';
    }
  }};

  border-width: 10px;

  background-repeat: no-repeat;
  background-size: cover;

  min-height: 35vh;
  width: 30vh;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  flex-direction: column;

  padding-left: ${({ wave, theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;

    if (wave) {
      if (getDarkMode) {
        return '20px';
      }
      return '30px';
    }
    return '20px';
  }};

  @media screen and (min-width: 50rem) {
  min-height: 45vh;
    width: 35vh;
  }

  @media screen and (min-width: 75rem) {
    min-height: 35vh;
    width: 30vh;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 65vh;
    width: 55vh;
  }
`;

export default Card;
