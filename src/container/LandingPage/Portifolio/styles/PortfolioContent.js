import styled from '@emotion/styled';

const PortfolioContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: ${({ left }) => {
    if (left) {
      return '30vh';
    }
    return '10vh';
  }};

  @media screen and (min-width: 50rem) {
    flex-direction: column;
  }
`;

export default PortfolioContent;
