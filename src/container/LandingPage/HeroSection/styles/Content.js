import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-direction: column;
  min-height: 30vh;

  @media screen and (min-width: 50rem) {
    display: none;
  }
`;

export default Content;
