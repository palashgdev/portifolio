import styled from '@emotion/styled';

const LeftQuaterCircleContainer = styled.div`
  display: none;

  svg {
    transform: rotate(90deg);
    width: 116.18px;
    height: 117.57px;
  }

  @media screen and (min-width: 50rem) {
    display: block;
  }
`;

export default LeftQuaterCircleContainer;
