import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;

  display: flex;
  justify-content: ${({ right }) => (right ? "flex-start" : "center")};
  align-items: center;

  flex-direction: column;

  @media screen and (min-width: 50rem) {
    flex: ${({ left }) => (left ? "1" : "2")};
    background-color: ${({ left, theme }) => {
      const { darkMode, darkColors } = theme;
      const { getDarkMode } = darkMode;

      if (left) {
        if (getDarkMode) {
          return darkColors.background.primary.lighter;
        }
        return "#01128F";
      } else {
        if (getDarkMode) {
          return darkColors.background.primary.normal;
        } else {
          return "white";
        }
      }
    }};

    position: relative;

    justify-content: center;
  }
`;

export default Container;
