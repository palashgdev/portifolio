import styled from "@emotion/styled";

const Container = styled.section`
  min-height: calc(30vh);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 50rem) {
    min-height: 40vh;
  }
`;

export default Container;
