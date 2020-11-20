import styled from '@emotion/styled';

const HireButton = styled.button`
  background: ${({ theme }) => {
    const { lightColors, darkMode, darkColors } = theme;
    if (darkMode.getDarkMode) {
      return darkColors.background.primary.light;
    } else {
      return lightColors.background.secondary.normal;
    }
  }};
  border-radius: 5px;
  width: 100%;

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

  :focus {
    outline: none;
  }

  @media screen and (min-width: 50rem) {
    font-size: 1.2rem;
    height: 35px;
  }

  @media screen and (min-width: 75rem) {
    font-size: 1.3125rem;
  }
`;

export default HireButton;
