import styled from "@emotion/styled";

const Email = styled("div")`
  font-weight: 900;

  font-size: 1.2rem;

  line-height: 185.19%;
  text-align: center;

  letter-spacing: 0.03em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;

    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return darkColors.text.primary.normal;
    } else {
      return "#002aff";
    }
  }};

  @media screen and (min-width: 50rem) {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 2rem;
  }
`;

export default Email;
