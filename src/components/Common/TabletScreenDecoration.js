import styled from "@emotion/styled";

const TabletScreenDecoration = styled.div`
  display: none;

  @media screen and (min-width: 50rem) {
    display: block;
  }
`;

export default TabletScreenDecoration;
