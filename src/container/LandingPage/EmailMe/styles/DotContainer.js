import styled from '@emotion/styled';

const DotContainer = styled.div`
  svg {
    position: absolute;
    right: 0%;
    bottom: -38%;
    z-index: -1;

    width: 55.52px;
    height: 44.58px;

    ellipse {
      fill: grey;
      fill-opacity: 1;
    }
  }

  @media (min-width: 50rem) {
    svg {
      width: 117.57px;
      height: 94.4px;
      right: -10%;
      bottom: -30%;
    }
  }
`;

export default DotContainer;
