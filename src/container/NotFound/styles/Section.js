import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(90vh - 80px);

  @media screen and (min-width: 50rem) {
    min-height: calc(100vh - 80px);
  }
`;

export default Section;
