import React from "react";

import Section from "./styles/Section";
import Container from "./styles/Container";
import Card from "./styles/Card";
import CardTitle from "./styles/CardTitle";
import CardSubTitle from "./styles/CardSubTitle";
import SubTitleContainer from "./styles/SubTitleContainer";

import Title from "../../../components/Common/Title";
import SubTitle from "../../../components/Common/SubTitle";

import Dots from "../../../icons/LandingPage/Dots";

const Specializing = () => (
  <Section>
    <Container>
      <Title>Specializing In</Title>
      <SubTitleContainer>
        <SubTitle>
          As a Full Stack Developer i have specialization in UI and scalability
          of the web ecosystem with clean code&nbsp;
          <span aria-label="wink" role="img">
            😉
          </span>
        </SubTitle>
      </SubTitleContainer>
    </Container>
    <Container>
      <Card wave>
        <Dots />
        <CardTitle wave>Frontend</CardTitle>
        <CardSubTitle>Creating visual and interactive UI elements</CardSubTitle>
      </Card>

      <Card color="#05C4BD">
        <CardTitle>Architecture</CardTitle>
        <CardSubTitle>
          Scalable System which scales with zero efforts
        </CardSubTitle>
      </Card>

      <Card color="#FF7E00">
        <CardTitle>Clean Code</CardTitle>
        <CardSubTitle>
          Easy to read, whether that reader is the original author of the code
          or somebody else.
        </CardSubTitle>
      </Card>
    </Container>
  </Section>
);

export default Specializing;
