import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: none;

  @media screen and (min-width: 50rem) {
    display: flex;
    width: 45%;

    align-items: center;
    justify-content: space-evenly;

    background: transparent;
  }
`;

export default ButtonContainer;
