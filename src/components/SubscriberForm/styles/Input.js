import styled from '@emotion/styled';

const Input = styled.input`
  height: 30px;
  font-size: 1rem;

  border-radius: 5px;

  border: none;
  color: grey;
  line-height: 31px;
  letter-spacing: 0.01em;
  outline: none;

  @media screen and (min-width: 50rem) {
    height: 35px;
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

export default Input;
