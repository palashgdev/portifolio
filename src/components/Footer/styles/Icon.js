import styled from "@emotion/styled";

const Icon = styled("a")`
  transition: 0.3s ease background;
  opacity: 1;

  :hover {
    opacity: 0.7;
    svg {
      path {
        fill: ${props => props.color};
      }
    }
  }
`;

export default Icon;
