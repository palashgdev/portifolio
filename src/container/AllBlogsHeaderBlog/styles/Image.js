import styled from '@emotion/styled';

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  object-position: center;
  z-index: 1;

  display: ${({ loaded }) => {
    if (!loaded) {
      return 'none';
    }
    return 'block';
  }};
`;

export default Image;
