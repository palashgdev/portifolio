import React from 'react';

import slideData from './SliderData';

import PortfolioContainer from './styles/PortfolioContainer';
import PortfolioContent from './styles/PortfolioContent';

import SubTitle from '../../../components/Common/SubTitle';
import Title from '../../../components/Common/Title';
import Button from '../../../components/Common/Button';

import Slider from '../../../components/Slider';

const SliderComponent = () => (
  <>
    <PortfolioContainer id="portfolio">
      <PortfolioContent left>
        <Title>Portfolio</Title>
        <SubTitle>Here are the list of the best curated works</SubTitle>
      </PortfolioContent>

      <PortfolioContent>
        <Button>See All Works</Button>
      </PortfolioContent>
    </PortfolioContainer>

    <Slider
      {...{
        slides: slideData,
      }}
    />
  </>
);

export default SliderComponent;
