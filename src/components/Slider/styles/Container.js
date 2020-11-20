import styled from '@emotion/styled';

const Container = styled.section`
  margin: 0 auto;
  position: relative;
  min-height: 50vh;
  overflow: hidden;

  @media screen and (min-width: 50rem) {
    min-height: 80vh;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 90vh;
  }
`;

export default Container;
