import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media screen and (min-width: 50rem) {
    flex-direction: row;
  }
`;

export default Container;
