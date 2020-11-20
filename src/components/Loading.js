import React from "react";
import Logo from "../icons/Logo";

import styled from "@emotion/styled";

const LoadingContainer = styled("div")``;

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  @keyframes color {
    0% {
      fill: #322c5b;
    }
    12.5% {
      fill: violet;
    }
    25% {
      fill: blueviolet;
    }
    50% {
      fill: blue;
    }
    75% {
      fill: blueviolet;
    }
    100% {
      fill: #322c5b;
    }
  }

  svg {
    width: 130px;
    height: 130px;

    #bigCircle {
      animation-duration: 4s;
      animation-name: color;
      animation-iteration-count: infinite;
      animation-delay: 1000ms;
      animation-timing-function: ease-in;
    }
  }
`;

const Loading = () => (
  <LoadingContainer>
    <Container>
      <Logo />
    </Container>
  </LoadingContainer>
);

export default Loading;
