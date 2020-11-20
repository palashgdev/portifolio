import styled from "@emotion/styled";

const Section = styled.section`
  min-height: 145vh;

  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
  padding-right: 2.5%;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return darkColors.background.primary.normal;
    }
    return "#f5f4f7";
  }};

  @media screen and (min-width: 50rem) {
    min-height: 100vh;

    flex-direction: row;
    background: white;
    padding: 0;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 160vh;
  }
`;

export default Section;
