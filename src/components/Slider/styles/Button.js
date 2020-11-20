import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: 3px solid transparent;

  border-radius: 100%;

  height: 3rem;

  padding: 0;
  width: 3rem;

  color: white;
  cursor: pointer;

  font-size: inherit;

  transform: ${({ right }) => {
    if (right) {
      return 'rotate(180deg)';
    }
    return 'none';
  }};

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px #6d64f7;
  }

  svg {
    fill: #6b7a8f;
    width: 100%;
  }
`;

export default Button;
