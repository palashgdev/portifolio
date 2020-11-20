import styled from "@emotion/styled";

const Slide = styled.div`
  height: 50px;
  overflow: hidden;

  > div {
    color: #b1afba;
    height: 50px;
    margin-bottom: 50px;
    text-align: left;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 50rem) {
      font-size: 1.2rem;
    }

    @media screen and (min-width: 75rem) {
      font-size: 1.3125rem;
    }
  }

  > div:nth-of-type(1) {
    animation: slide 5s linear infinite;
  }

  @keyframes slide {
    0% {
      margin-top: -300px;
    }
    5% {
      margin-top: -200px;
    }
    33% {
      margin-top: -200px;
    }
    38% {
      margin-top: -100px;
    }
    66% {
      margin-top: -100px;
    }
    71% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export default Slide;
