import styled from "@emotion/styled";

const MobileScreenDecoration = styled.div`
  display: block;

  @media screen and (min-width: 50rem) {
    display: none;
  }
`;

export default MobileScreenDecoration;
