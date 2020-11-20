import styled from '@emotion/styled';

const Description = styled.h3`
  line-height: 19px;
  font-weight: 400;
  font-size: 1rem;

  /* identical to box height */

  text-align: left;
  letter-spacing: 0.08em;

  color: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    console.log(darkColors);
    if (getDarkMode) {
      return '';
    }
    return '#969696';
  }};

  @media screen and (min-width: 50rem) {
    font-size: 1.3125rem;
  }
`;

export default Description;
