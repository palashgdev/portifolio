import styled from '@emotion/styled';

const HamburgerMenu = styled.div`
  width: 19px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 20px;
  right: 20px;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    border-radius: 10px;

    background: ${({ theme }) => {
      const darkMode = theme.darkMode.getDarkMode;
      const { darkColors, lightColors } = theme;

      const { background: darkBackground } = darkColors;
      const { background: lightBackground } = lightColors;

      if (darkMode) {
        return lightBackground.primary.normal;
      } else {
        return darkBackground.primary.normal;
      }
    }};
  }

  span:nth-of-type(1) {
    top: 25%;
    transform-origin: left center;
  }

  span:nth-of-type(2) {
    top: 50%;
    transform-origin: left center;
  }

  span:nth-of-type(3) {
    top: 75%;
    transform-origin: left center;
  }

  &.overflow {
    overflow: hidden;
  }

  &.open span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 5px;
    left: 8px;
  }

  &.open span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 18px;
    left: 8px;
  }
`;

export default HamburgerMenu;
