import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const GoToLink = styled(Link)`
  font-size: 1rem;
  line-height: 19px;

  text-align: center;
  letter-spacing: 0.08em;

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

  text-decoration: none;
`;

export default GoToLink;
