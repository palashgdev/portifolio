import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;
  position: relative;

  background: ${({ theme, up }) => {
    const { darkMode, darkColors } = theme;

    if (up || darkMode.getDarkMode) {
      if (darkMode.getDarkMode) {
        return darkColors.background.primary.normal;
      } else {
        return "#002AFF";
      }
    }
  }};

  > div:nth-of-type(2) {
    display: ${({ up }) => (up ? "none" : "block")};
  }

  @media screen and (min-width: 50rem) {
    background: ${({ theme, up }) => {
    const { darkMode, darkColors } = theme;
    if (up) {
      if (darkMode.getDarkMode) {
        return darkColors.background.primary.normal;
      } else {
        return "white";
      }
    } else {
      if (darkMode.getDarkMode) {
        return darkColors.background.primary.lighter;
      } else {
        return "#01128F";
      }
    }
  }};

    flex-grow: ${({ up }) => (up ? "2" : "1")};

    > div:nth-of-type(1) {
      display: none;
    }

    > div:nth-of-type(2) {
      display: ${({ up }) => (up ? "flex" : "none")};

      flex-direction: column;
      min-height: 40vh;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  }
`;

export default Container;
