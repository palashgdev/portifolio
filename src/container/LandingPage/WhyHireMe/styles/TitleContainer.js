import styled from "@emotion/styled";

const TitleContainer = styled.div`
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: 30vh;

  @media screen and (min-width: 50rem) {
    width: 60%;
    align-items: flex-start;

    h3,
    h4 {
      text-align: left;
    }
  }
`;

export default TitleContainer;
