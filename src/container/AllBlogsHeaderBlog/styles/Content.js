import styled from '@emotion/styled';

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ left }) => {
    if (left) {
      return 'center';
    }
    return 'space-between';
  }};

  align-items: flex-start;

  flex-direction: column;

  @media screen and (min-width: 50rem) {
    justify-content: ${({ left }) => {
      if (left) {
        return 'center';
      }
      return 'space-evenly';
    }};

    margin-left: ${({ right }) => {
      if (right) {
        return '3%';
      }
      return 0;
    }};
  }
`;

export default Content;
