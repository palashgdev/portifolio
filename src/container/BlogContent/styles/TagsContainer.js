import styled from '@emotion/styled';

const TagsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;

  > div:not(:first-of-type) {
    margin-left: 10px;
  }
`;

export default TagsContainer;
