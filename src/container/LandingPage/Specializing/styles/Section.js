import styled from '@emotion/styled';

const Section = styled.section`
  min-height: 200vh;

  display: flex;

  flex-direction: column;

  padding-left: 2.5%;
  padding-right: 2.5%;

  @media screen and (min-width: 50rem) {
    min-height: 100vh;
    padding: 0;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 280vh;
  }
`;

export default Section;
