import styled from '@emotion/styled';

const Container = styled.div`
  height: 50vh;
  animation-name: loading-skeleton;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-duration: 3s;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    const { background } = darkColors;
    const { primary } = background;
    if (getDarkMode) {
      return `linear-gradient(to right, ${primary.lighter} 8%, ${primary.light} 18%, ${primary.normal} 33%)`;
    }
    return 'linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%)';
  }};

  @keyframes loading-skeleton {
    0% {
      background-position: -100vw 0;
    }
    100% {
      background-position: 100vw 0;
    }
  }

  @media screen and (min-width: 50rem) {
    height: 80vh;
  }
`;

export default Container;
