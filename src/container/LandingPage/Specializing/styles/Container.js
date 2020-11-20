import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 50rem) {
    flex-direction: row;
  }
`;

export default Container;
