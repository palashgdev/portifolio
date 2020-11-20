import styled from "@emotion/styled";

const Button = styled.button`
  font-size: 1.1rem;
  line-height: 14px;
  letter-spacing: 0.08em;

  color: #646b8c;

  border: none;

  cursor: pointer;

  :focus {
    outline: 0;
  }

  :hover {
    font-weight: bold;
  }

  transition: 0.5s ease background;

  color: ${({ theme }) => {
    const { darkMode, darkColors, lightColors } = theme;

    const { getDarkMode } = darkMode;
    const { text: darkText } = darkColors;
    const { text: lightText } = lightColors;

    if (getDarkMode) {
      return darkText.primary.light;
    } else {
      return lightText.primary.normal;
    }
  }};

  background: transparent;
`;

export default Button;
