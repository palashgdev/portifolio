import styled from '@emotion/styled';

const Form = styled.form`
  min-height: 30vh;

  background-color: ${({ theme }) => {
    const darkMode = theme.darkMode.getDarkMode;
    const { darkColors } = theme;

    const { background: darkBackground } = darkColors;

    if (darkMode) {
      return darkBackground.primary.light;
    } else {
      return 'rgba(220,220,220, 0.3)';
    }
  }};

  border-radius: 5px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default Form;
