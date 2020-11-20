import styled from '@emotion/styled';

const LightTitle = styled.h3`
  line-height: 19px;
  font-weight: 400;
  font-size: 14px;

  /* identical to box height */

  text-align: right;
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
    font-size: 1rem;
  }
`;

export default LightTitle;
