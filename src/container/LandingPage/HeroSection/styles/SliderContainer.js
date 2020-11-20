import styled from "@emotion/styled";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;

    line-height: 19px;
    text-align: center;
    letter-spacing: 0.08em;

    color: #b1afba;

    @media screen and (min-width: 50rem) {
      font-size: 1.2rem;
    }

    @media screen and (min-width: 75rem) {
      font-size: 1.3125rem;
    }
  }

  @media screen and (min-width: 50rem) {
    align-items: flex-start;
  }

  @media screen and (max-width: 50rem) {
    margin-top: 5vh;
  }
`;

export default SliderContainer;
