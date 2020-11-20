import styled from "@emotion/styled";

const SmallRectangle = styled.div`
  position: absolute;
  width: 45.27px;
  height: 41.41px;
  bottom: 0;
  right: -54px;

  border: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return `15px solid ${darkColors.background.primary.lighter}`;
    } else {
      return "15px solid #fbd954";
    }
  }};
  transform: matrix(0.93, 0.29, -0.37, 0.95, 0, 0);

  @media screen and (min-width: 50rem) {
    top: 30%;
    bottom: unset;
    right: -54px;

    border: ${({ theme }) => {
      const { darkMode, darkColors } = theme;
      const { getDarkMode } = darkMode;
      if (getDarkMode) {
        return `15px solid ${darkColors.background.primary.normal}`;
      } else {
        return "15px solid #fbd954";
      }
    }};
  }
`;

export default SmallRectangle;
