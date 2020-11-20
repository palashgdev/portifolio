import styled from '@emotion/styled';

const TagContainer = styled.div`
  display: flex;

  > h3:not(:first-of-type) {
    margin-left: 5px;
  }

  @media screen {
    > h3:not(:first-of-type) {
      margin-left: 10px;
    }
  }
`;

export default TagContainer;
