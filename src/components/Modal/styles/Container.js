import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(211, 211, 211, 0.9);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: 1s ease;
`;

export default ModalContainer;
