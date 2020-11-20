import styled from '@emotion/styled';

const FooterWrapper = styled('div')`
  display: flex;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding-top: 2%;
  padding-bottom: 2%;

  max-width: 70vw;

  flex-direction: ${({ icons }) => {
    if (!icons) {
      return 'column';
    }
    return 'row';
  }};

  @media screen and (min-width: 50rem) {
    max-width: ${({ icons }) => (icons ? '40vw' : '70vw')};
    flex-direction: row;
  }
`;

export default FooterWrapper;
