import styled from '@emotion/styled';

const Container = styled.section`
  min-height: 65vh;

  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media screen and (min-width: 50rem) {
    margin-top: 100px;
    margin-bottom: 100px;
    flex-direction: row;

    min-height: 40vh;
  }
`;

export default Container;
