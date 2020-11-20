import styled from '@emotion/styled';

const Span = styled.span`
  color: ${({ theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return 'rgba(255, 255, 255, 0.6)';
    }
    return '#8f8e91';
  }};

  font-size: 1rem;

  text-align: center;
`;

export default Span;
