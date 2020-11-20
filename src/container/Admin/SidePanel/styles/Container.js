import styled from '@emotion/styled';

const Container = styled.div`
  flex: 0.1;
  display: flex;

  background: ${({ theme }) => {
    const { lightColors, darkMode, darkColors } = theme;
    if (darkMode.getDarkMode) {
      return darkColors.background.primary.lighter;
    } else {
      return lightColors.background.primary.normal;
    }
  }};

  @media screen and (min-width: 50rem) {
    flex: 0.25;
    flex-direction: column;
  }
`;

export default Container;
