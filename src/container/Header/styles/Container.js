import styled from "@emotion/styled";

const Container = styled("header")`
  display: flex;
  min-height: 10vh;
  align-items: center;

  background: ${({ theme }) => {
    const darkMode = theme.darkMode.getDarkMode;
    const { darkColors, lightColors } = theme;

    const { background: darkBackground } = darkColors;
    const { background: lightBackground } = lightColors;

    if (darkMode) {
      return darkBackground.primary.lighter;
    } else {
      return lightBackground.primary.normal;
    }
  }};

  box-shadow: ${({ theme }) => {
    const darkMode = theme.darkMode.getDarkMode;
    const { darkColors } = theme;

    const { background: darkBackground } = darkColors;

    if (darkMode) {
      return `0px 2px 5px ${darkBackground.primary.lighter}`;
    } else {
      return "0px 2px 5px grey";
    }
  }};

  transition: 0.3s ease background;
  z-index: 9999;

  @media screen and (min-width: 50rem) {
    min-height: 8vh;
    box-shadow: none;
    position: fixed;

    top: 0;
    width: 100%;
    background: ${({ getScroll, theme }) => {
      const { darkMode, darkColors } = theme;
      const { getDarkMode } = darkMode;

      if (getScroll > 50) {
        if (getDarkMode) {
          return darkColors.background.primary.lighter;
        } else {
          return "white";
        }
      }
      return "transparent";
    }};
  }
`;

export default Container;
