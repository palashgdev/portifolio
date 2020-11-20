import styled from '@emotion/styled';

const RightQuaterCircleContainer = styled.div`
  display: none;

  svg {
    position: absolute;
    top: 0px;
    right: 0;
    width: 116.18px;
    height: 117.57px;
    transform: rotate(270deg);
  }

  @media screen and (min-width: 50rem) {
    display: block;
  }
`;

export default RightQuaterCircleContainer;
