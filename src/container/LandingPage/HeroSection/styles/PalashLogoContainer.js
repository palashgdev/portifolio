import styled from "@emotion/styled";

const PalashLogoContainer = styled.div`
  display: none;

  @media screen and (min-width: 90rem) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background: url("/icons/HeroSection/PalashBanner.svg");
    background-size: contain;
    background-position: center;

    background-repeat: no-repeat;
    width: 12.5vw;

    opacity: ${({ theme }) => {
      const { darkMode } = theme;
      const { getDarkMode } = darkMode;
      if (getDarkMode) {
        return 0.1;
      } else {
        return 1;
      }
    }};
  }
`;

export default PalashLogoContainer;
