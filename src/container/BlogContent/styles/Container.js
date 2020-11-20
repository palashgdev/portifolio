import styled from '@emotion/styled';

const Container = styled.div`
  .bf-content {
    height: unset;
  }

  .public-DraftEditor-content {
    padding: 0 !important;
  }

  blockquote,
  pre {
    background: ${({ theme }) => {
      const { darkMode, darkColors } = theme;
      const { getDarkMode } = darkMode;
      const { background } = darkColors;
      if (getDarkMode) {
        return `${background.primary.light} !important`;
      } else {
        return '#F9F9F9 !important';
      }
    }};

    color: ${({ theme }) => {
      const { darkMode } = theme;
      const { getDarkMode } = darkMode;

      if (getDarkMode) {
        return `#b1afba !important`;
      }
      return '#39383F !important';
    }};

    border-left: 7px solid #05c4bd !important;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  pre {
    border-left: 7px solid #ff7e00 !important;
  }

  img {
    filter: ${({ theme }) => {
      const { darkMode } = theme;
      const { getDarkMode } = darkMode;

      if (getDarkMode) {
        return 'grayscale(0.5)';
      } else {
        return 'grayscale(0)';
      }
    }};
  }

  * {
    font-size: 1rem;
    @media screen and (min-width: 50rem) {
      font-size: 1.2rem;
    }
  }
`;

export default Container;
