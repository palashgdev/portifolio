import styled from '@emotion/styled';

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 85%;
  width: 100%;

  @media screen and (min-width: 50rem) {
    top: 90%;
  }
`;

export default SliderControls;
