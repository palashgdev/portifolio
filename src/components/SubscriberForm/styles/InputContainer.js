import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  min-width: 70vw;

  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 35rem) {
    min-width: 35vw;
  }

  @media screen and (min-width: 50rem) {
    min-width: 30vw;
  }

  @media screen and (min-width: 75rem) {
    min-width: 20rem;
  }
`;

export default InputContainer;
