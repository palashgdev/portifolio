import styled from '@emotion/styled';

const Chip = styled.div`
  background: ${({ theme }) => {
    const { lightColors, darkMode, darkColors } = theme;
    if (darkMode.getDarkMode) {
      return darkColors.background.primary.lighter;
    } else {
      return lightColors.background.secondary.normal;
    }
  }};
  border-radius: 5px;

  font-size: 1rem;
  line-height: 19px;

  text-align: center;
  letter-spacing: 0.04em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    if (darkMode.getDarkMode) {
      return darkColors.text.primary.normal;
    }
    return 'white';
  }};

  border-width: 0px;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  cursor: pointer;

  min-width: 100px;

  :focus {
    outline: none;
  }

  @media screen and (min-width: 50rem) {
    font-size: 1.2rem;
    padding: 0.45rem 0.7rem 0.45rem 0.7rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 1.3125rem;
    padding: 0.65rem 0.9rem 0.65rem 0.9rem;
  }
`;

export default Chip;
