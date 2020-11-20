import styled from "@emotion/styled";

const Title = styled.h3`
  font-size: 0.875rem;

  line-height: 16px;
  letter-spacing: 0.05em;
  font-weight: normal;
  font-style: normal;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return darkColors.text.primary.normal;
    }
    return "#000000";
  }};

  @media screen and (min-width: 50rem) {
    font-size: 1.3125rem;
  }
`;

export default Title;
