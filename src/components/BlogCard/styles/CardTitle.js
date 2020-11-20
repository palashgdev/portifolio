import styled from '@emotion/styled';

const CardTitle = styled.h3`
  font-style: normal;
  font-weight: bold;

  font-size: 1.32890625rem;

  line-height: 31px;

  letter-spacing: 0.01em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return darkColors.text.primary.normal;
    }
    return '#39393F';
  }};

  @media screen and (min-width: 50rem) {
    font-size: 2rem;
  }
`;

export default CardTitle;
