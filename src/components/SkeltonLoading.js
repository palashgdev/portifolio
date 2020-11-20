import styled from '@emotion/styled';

const PostLoadingContainer = styled.div`
  height: ${({ mobileHeight }) => (mobileHeight !== undefined ? mobileHeight : '5vh')};
  animation-name: loading-skeleton;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-duration: 3s;
  width: 100%;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    const { background } = darkColors;
    const { primary } = background;
    if (getDarkMode) {
      return `linear-gradient(to right, ${primary.light} 10%, ${primary.lighter} 18%, ${primary.normal} 33%)`;
    }
    return 'linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%)';
  }};

  margin-top: 10px;
  margin-bottom: 10px;

  @keyframes loading-skeleton {
    0% {
      background-position: -100vw 0;
    }
    100% {
      background-position: 100vw 0;
    }
  }

  @media screen and (min-width: 50rem) {
    height: ${({ desktopHeight }) => (desktopHeight !== undefined ? desktopHeight : '8vh')};
  }
`;

export default PostLoadingContainer;
