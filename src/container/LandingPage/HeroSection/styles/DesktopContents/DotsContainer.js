import styled from "@emotion/styled";

const DotsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  svg {
    ellipse {
      fill-opacity: ${({ theme }) => {
        const { darkMode } = theme;
        if (darkMode.getDarkMode) {
          return 1;
        } else {
          return 0.2;
        }
      }};
    }
  }
`;

export default DotsContainer;
