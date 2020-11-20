import styled from "@emotion/styled";

const SmallCircle = styled.div`
  position: absolute;

  width: 12.95px;
  height: 12.95px;

  border: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return `5px solid ${darkColors.background.primary.normal}`;
    } else {
      return "5px solid #fbd954";
    }
  }};

  top: 40%;
  right: 20%;
  border-radius: 50%;
`;

export default SmallCircle;
