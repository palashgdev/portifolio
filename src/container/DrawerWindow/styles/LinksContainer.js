import styled from "@emotion/styled";

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  min-height: 60vh;
  flex-direction: column;

  flex: 1;

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
`;

export default LinkContainer;
