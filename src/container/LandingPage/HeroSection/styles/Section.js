import styled from "@emotion/styled";

const Section = styled.section`
  min-height: calc(110vh - 10vh);

  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 50rem) {
    min-height: calc(100vh);
    flex-direction: row;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 120vh;
  }
`;

export default Section;
