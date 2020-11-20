import styled from '@emotion/styled';

const Card = styled.div`
  min-height: 50vh;
  margin: 3rem;

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

  display: flex;
  justify-content: center;
  border-radius: 5px;

  @media screen and (min-width: 50rem) {
    margin: 3rem;
  }

  @media screen and (min-width: 75rem) {
    margin: 6rem;
  }
`;

export default Card;
