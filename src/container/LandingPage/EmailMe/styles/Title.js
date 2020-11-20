import styled from "@emotion/styled";

const Title = styled.div`
  font-style: normal;
  font-weight: normal;

  font-size: 1rem;
  line-height: 185.19%;
  text-align: center;
  letter-spacing: 0.065em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;

    if (getDarkMode) {
      return darkColors.text.primary.lighter;
    } else {
      return "#8f8e91";
    }
  }};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 1.3125rem;
  }
`;

export default Title;
