import styled from '@emotion/styled';

const PortfolioContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;
  min-height: 30vh;

  @media screen and (min-width: 50rem) {
    flex-direction: row;
  }

  @media screen and (max-width: 50rem) and (orientation: landscape) {
    min-height: 50vh;
  }
`;

export default PortfolioContainer;
