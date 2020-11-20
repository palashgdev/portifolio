import styled from "@emotion/styled";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding-left: 2.5%;
  padding-right: 2.5%;

  @media screen and (min-width: 50rem) {
    min-height: 50vh;
    flex-direction: row;
    padding: 0;
  }
`;

export default Section;
