import styled from '@emotion/styled';

const TagContainer = styled.div`
  display: flex;

  > div:not(:first-of-type) {
    margin-left: 10px;
  }
`;

export default TagContainer;
