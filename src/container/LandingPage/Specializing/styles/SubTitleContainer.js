import styled from "@emotion/styled";

const SubTitleContainer = styled.div`
  @media screen and (min-width: 50rem) {
    width: 50%;
    border-left: 3px solid #002aff;
    padding-left: 7%;

    h3 {
      text-align: left;
    }
  }

  @media screen and (min-width: 75rem) {
    width: 40%;

    border-left: 3px solid #002aff;
    padding-left: 10%;

    h3 {
      text-align: left;
    }
  }
`;

export default SubTitleContainer;
