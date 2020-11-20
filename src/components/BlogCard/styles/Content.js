import styled from '@emotion/styled';

const Content = styled.div`
  flex: ${({ right }) => {
    if (right) {
      return '0.6';
    }
    return '1';
  }};

  display: flex;
  flex-direction: column;
  justify-content: ${({ right }) => {
    if (right) {
      return 'center';
    }
    return 'flex-start';
  }};

  @media screen and (min-width: 50rem) {
    padding: ${({ left }) => {
      if (left) {
        return '0 20px 0 20px';
      }
      return 0;
    }};
  }
`;

export default Content;
