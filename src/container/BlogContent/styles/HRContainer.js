import styled from '@emotion/styled';

const HRContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  display: ${({ hr }) => (hr ? 'block' : 'flex')};
`;

export default HRContainer;
