import styled from "@emotion/styled";

const Slide = styled.img`
  height: 100%;
  width: ${({ width }) => `${width}px`};
  /* background-image: ${({ content }) => `url(${content})`}; */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
`;

export default Slide;
