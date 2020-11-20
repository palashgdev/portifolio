import styled from "@emotion/styled";

const CardTitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 1.55rem;

  line-height: 24px;
  /* or 124% */

  letter-spacing: 0.05em;

  color: ${({ wave, theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;

    if (wave) {
      return "white";
    } else {
      if (getDarkMode) {
        return darkColors.text.primary.normal;
      } else {
        return "#000000";
      }
    }
  }};

  @media screen and (min-width: 50rem) {
    font-size: 2.0625rem;
  }
`;

export default CardTitle;
