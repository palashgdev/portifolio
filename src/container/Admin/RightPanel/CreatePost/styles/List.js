import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  counter-reset: step;

  > li:last-of-type {
    ::after {
      content: none;
    }
  }
`;

export default List;
