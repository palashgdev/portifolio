import React from "react";

import Section from "./styles/Section";
import Container from "./styles/Container";
import PhotoContainer from "./styles/PhotoContainer";
import TextContainer from "./styles/TextContainer";
import Button from "./styles/Button";

import Title from "../../../components/Common/Title";
import SubTitle from "../../../components/Common/SubTitle";

import DesktopComponent from "../../../components/Common/TabletScreenDecoration";

const AboutMe = () => (
  <Section id="aboutMe">
    <Container left>
      <PhotoContainer />
    </Container>
    <Container right>
      <TextContainer>
        <Title>Bit About Me</Title>
        <SubTitle>
          A Full Stack Engineer with verifiable success leading teams in
          delivering appropriate technology solutions for desktop and mobile
          products. Comprehensive knowledge of platform development, enterprise
          architecture, agile methodologies, cloud services, and web-based
          applications. Innovative change agent with a unique mix of high-level
          technology direction and deep technical expertise.
        </SubTitle>

        <DesktopComponent>
          <Button
            target="_blank"
            href="mailto:me@palashg.dev?Subject=Hi%20Palash%20"
          >
            Hire Me
          </Button>
        </DesktopComponent>
      </TextContainer>
    </Container>
  </Section>
);

export default AboutMe;
