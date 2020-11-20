import styled from '@emotion/styled';

const Container = styled('footer')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  min-height: 150px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 2%;

  background-color: ${({ theme }) => {
    const darkMode = theme.darkMode.getDarkMode;
    const { darkColors } = theme;

    const { background: darkBackground } = darkColors;

    if (darkMode) {
      return darkBackground.primary.lighter;
    } else {
      return 'rgba(220,220,220, 0.3)';
    }
  }};
`;

export default Container;
