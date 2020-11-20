import styled from "@emotion/styled";

const TopRightCircle = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transform: rotate(270deg);

  > svg {
    path {
      fill: ${({ theme }) => {
        const { darkMode, darkColors } = theme;
        if (darkMode.getDarkMode) {
          return darkColors.background.primary.lighter;
        } else {
          return "rgb(245, 244, 247)";
        }
      }};
    }
  }

  @media screen and (min-width: 50rem) {
    display: none;
  }
`;

export default TopRightCircle;
