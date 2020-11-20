import styled from '@emotion/styled';

const SliderWrapper = styled.ul`
  display: flex;
  margin: 0 calc(10px * -1);
  position: absolute;
  transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);
  padding: 0;
`;

export default SliderWrapper;
