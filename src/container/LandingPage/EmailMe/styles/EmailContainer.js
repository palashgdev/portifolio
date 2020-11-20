import styled from '@emotion/styled';

const EmailContainer = styled('div')`
  padding: 3%;
  width: 95vw;

  min-height: 13vh;

  border: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return `0.547025px solid ${darkColors.background.primary.light}`;
    } else {
      return '0.547025px solid #e8e8e8';
    }
  }};

  box-sizing: border-box;
  box-shadow: 4.10269px 8.20538px 17.7783px rgba(0, 0, 0, 0.15);
  border-radius: 2.46161px;

  position: relative;

  max-width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;

    if (darkMode.getDarkMode) {
      return darkColors.background.primary.lighter;
    } else {
      return 'white';
    }
  }};

  @media (min-width: 50rem) {
    max-width: 500px;
    min-height: 14vh;
    padding: unset;
  }

  @media (min-width: 75rem) {
    max-width: 650px;
    min-height: 16vh;
    padding: unset;
  }
`;

export default EmailContainer;
