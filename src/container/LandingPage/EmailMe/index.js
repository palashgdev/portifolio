import React from "react";

import Container from "./styles/Container";
import EmailContainer from "./styles/EmailContainer";
import Email from "./styles/Email";
import Title from "./styles/Title";

import DotContainer from "./styles/DotContainer";
import Dots from "../../../icons/LandingPage/Dots";

const EmailMe = () => (
  <Container>
    <EmailContainer>
      <Title>Have any project in mind? Say Hello at</Title>
      <Email>me@palashg.dev</Email>
      <DotContainer>
        <Dots />
      </DotContainer>
    </EmailContainer>
  </Container>
);

export default EmailMe;
