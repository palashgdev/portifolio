import styled from '@emotion/styled';

const Slide = styled.li`
  align-items: center;
  justify-content: flex-end;

  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 60vmin;
  width: 75vmin;

  margin-right: 20px;
  margin-left: 20px;

  opacity: ${({ current }) => {
    if (current) {
      return '1';
    }
    return '0.25';
  }};

  position: relative;
  text-align: center;

  transition: opacity calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84);

  z-index: 1;
`;

export default Slide;
