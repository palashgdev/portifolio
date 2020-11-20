import styled from "@emotion/styled";

const Content = styled("div")`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;

  > svg {
    circle:nth-of-type(1) {
      fill: ${({ theme }) => {
        const { darkMode, darkColors } = theme;

        const { getDarkMode } = darkMode;
        const { background } = darkColors;
        if (getDarkMode) {
          return background.primary.normal;
        } else {
          return "rgb(50, 44, 91);";
        }
      }};
    }
  }

  @media screen and (min-width: 50rem) {
    width: 60%;
    margin: 0 auto;

    > svg {
      circle:nth-of-type(1) {
        fill: ${({ theme, getScroll }) => {
          const { darkMode, darkColors } = theme;

          const { getDarkMode } = darkMode;
          const { background } = darkColors;
          if (getDarkMode) {
            if (getScroll > 50) {
              return background.primary.normal;
            } else {
              return background.primary.lighter;
            }
          } else {
            return "rgb(50, 44, 91);";
          }
        }};
      }
    }
  }
`;

export default Content;
