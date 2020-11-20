import styled from "@emotion/styled";

const PhotoContainer = styled.div`
  width: 161px;
  height: 262px;

  background: ${({ theme }) => {
    const { darkMode, darkColors } = theme;
    const { background } = darkColors;

    if (darkMode.getDarkMode) {
      return `linear-gradient(
      272.31deg,
      ${background.primary.normal} 0.88%,
      ${background.primary.light} 64.09%,
      ${background.primary.lighter} 98.76%
    ),url(''),
    #fbd954`;
    } else {
      return `linear-gradient(
      272.31deg,
      #e49f01 0.88%,
      #fec900 64.09%,
      rgba(255, 255, 255, 0) 98.76%
    ),url(''),
    #fbd954`;
    }
  }};

  box-shadow: 0px 16px 10px rgba(0, 0, 0, 0.03);
  border-radius: 80.5px;

  border-color: white;
  border-width: 5px;
  border-style: solid;

  @media screen and (min-width: 50rem) {
    width: 20rem;
    height: 20rem;

    border-radius: 50%;

    position: absolute;
    top: 25%;
    right: -25%;
    z-index: 1;
  }

  @media screen and (min-width: 75rem) {
    width: 25rem;
    height: 25rem;

    border-radius: 50%;

    position: absolute;
    top: 25%;
    right: -25%;
    z-index: 1;
  }
`;

export default PhotoContainer;
