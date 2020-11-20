import styled from "@emotion/styled";

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;

  font-size: 1.62890625rem;

  line-height: 31px;
  /* identical to box height */

  letter-spacing: 0.01em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return darkColors.text.primary.normal;
    }
    return "#000000";
  }};

  @media screen and (min-width: 50rem) {
    font-size: 2rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 2.8125rem;
  }
`;

export default Title;
