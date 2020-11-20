import styled from "@emotion/styled";

const Link = styled.div`
  font-size: 1rem;
  line-height: 19px;

  text-align: center;
  letter-spacing: 0.08em;

  color: ${({ theme }) => {
    const { darkMode, darkColors, lightColors } = theme;

    const { getDarkMode } = darkMode;
    const { text: darkText } = darkColors;
    const { text: lightText } = lightColors;

    if (getDarkMode) {
      return darkText.primary.light;
    } else {
      return lightText.primary.normal;
    }
  }};
`;

export default Link;
