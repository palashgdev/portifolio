import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  min-height: 30vh;
  cursor: pointer;

  @media screen and (min-width: 50rem) {
    min-height: 20vh;
  }
`;

export default CardContainer;
