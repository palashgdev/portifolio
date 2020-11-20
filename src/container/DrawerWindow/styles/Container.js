import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => {
    const darkMode = theme.darkMode.getDarkMode;
    const { darkColors, lightColors } = theme;

    const { background: darkBackground } = darkColors;
    const { background: lightBackground } = lightColors;

    if (darkMode) {
      return darkBackground.primary.normal;
    } else {
      return lightBackground.primary.normal;
    }
  }};

  animation: slide-in 0.7s ease-out;

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translate(0%);
    }
  }
`;

export default Container;
