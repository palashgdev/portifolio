import styled from "@emotion/styled";

const SubTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 160%;
  /* or 22px */

  text-align: center;

  color: #b1afba;

  @media screen and (min-width: 50rem) {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 75rem) {
    font-size: 1.3125rem;
  }
`;

export default SubTitle;
