import styled from "@emotion/styled";

const Content = styled.div`
  flex: ${({ left }) => (left ? "1" : "6")};
  display: flex;

  justify-content: ${({ left }) => (left ? "center" : "space-evenly")};
  align-items: ${({ left }) => (left ? "center" : "flex-start")};

  flex-direction: column;
`;

export default Content;
