import styled from '@emotion/styled';

const Container = styled.div`
  padding-right: 4%;
  padding-left: 4%;
  margin-top: 20px;

  > div:nth-of-type(2) {
    margin-top: 15px;
  }

  @media screen and (min-width: 50rem) {
    padding-right: 10%;
    padding-left: 10%;
    margin-top: 10vh;
  }
`;

export default Container;
