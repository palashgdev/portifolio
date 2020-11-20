import styled from "@emotion/styled";

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;

  line-height: 46px;
  /* identical to box height */

  letter-spacing: 0.04em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    if (darkMode.getDarkMode) {
      return darkColors.text.primary.normal;
    } else {
      return "#39393f";
    }
  }};

  @media screen and (min-width: 50rem) {
    font-size: 3rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 4.25rem;
  }
`;

export default Title;
