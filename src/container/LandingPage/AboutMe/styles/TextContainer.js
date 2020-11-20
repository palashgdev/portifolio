import styled from "@emotion/styled";

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;
  min-height: 70vh;

  @media screen and (min-width: 50rem) {
    min-height: 70vh;

    align-items: flex-start;
    width: 65%;

    h3 {
      text-align: left;
    }
  }

  @media screen and (min-width: 75rem) {
    min-height: 65vh;

    align-items: flex-start;
    width: 55%;

    h3 {
      text-align: left;
    }
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 70vh;
  }
`;

export default TextContainer;
