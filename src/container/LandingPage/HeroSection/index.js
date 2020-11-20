import React from "react";
import PropTypes from "prop-types";

import Section from "./styles/Section";
import Container from "./styles/Container";
import Content from "./styles/Content";
import TopCircle from "./styles/TopRightCircle";
import BottomRightCircle from "./styles/BottomRightCircle";
import Rectangle from "./styles/Rectangle";
import PalashLogoContainer from "./styles/PalashLogoContainer";

import SmallRectangle from "./styles/MobileContents/SmallRectangle";
import SmallCircle from "./styles/MobileContents/SmallCircle";
import SmallDots from "./styles/MobileContents/SmallDots";

import SmallCircle1 from "./styles/DesktopContents/SmallCircle1";
import DotsContainer from "./styles/DesktopContents/DotsContainer";
import DotsContainer1 from "./styles/DesktopContents/DotsContainer1";
import ArrowUpContainer from "./styles/DesktopContents/ArrowUpContainer";

import AboutPalash from "./Palash";

import QuaterCircle from "../../../icons/LandingPage/QuaterCircle";
import Dots from "../../../icons/LandingPage/Dots";

import MobileScreenDecoration from "../../../components/Common/MobileScreenDecoration";
import TabletScreenDecoration from "../../../components/Common/TabletScreenDecoration";

const HeroSection = ({ onClickCVHandler }) => (
  <Section>
    <Container up>
      <Rectangle />
      <div>
        <AboutPalash {...{ onClickCVHandler }} />
      </div>

      <PalashLogoContainer />

      <MobileScreenDecoration>
        <SmallRectangle />
        <SmallCircle />
        <SmallDots />
      </MobileScreenDecoration>
    </Container>

    <Container>
      <Content>
        <AboutPalash {...{ onClickCVHandler }} />
      </Content>

      <TopCircle up>
        <QuaterCircle />
      </TopCircle>

      <BottomRightCircle>
        <QuaterCircle />
      </BottomRightCircle>

      <TabletScreenDecoration>
        <Rectangle />
        <SmallCircle1 />
        <SmallRectangle />
        <ArrowUpContainer />

        <DotsContainer>
          <Dots />
        </DotsContainer>
        <DotsContainer1>
          <Dots />
        </DotsContainer1>
      </TabletScreenDecoration>
    </Container>
  </Section>
);

HeroSection.propTypes = {
  onClickCVHandler: PropTypes.func.isRequired
};
export default HeroSection;
