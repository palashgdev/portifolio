import styled from '@emotion/styled';

const IconContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  flex-direction: column;
  height: 20vh;

  svg {
    cursor: not-allowed;
  }

  @media screen and (max-width: 50rem) {
    display: none;
  }
`;

export default IconContainer;
