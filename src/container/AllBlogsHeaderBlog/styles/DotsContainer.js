import styled from '@emotion/styled';

const DotsContainer = styled.div`
  position: absolute;
  bottom: -10%;
  left: -5%;

  @media screen and (max-width: 50rem) {
    display: none;
  }

  svg ellipse {
    fill: grey;
    fill-opacity: 1;
  }
`;

export default DotsContainer;
