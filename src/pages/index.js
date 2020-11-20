import React, { useCallback } from 'react';
import ReactHelmet from 'react-helmet';

import HeroSection from '../container/LandingPage/HeroSection';
import AboutMeSection from '../container/LandingPage/AboutMe';
import SpecializingSection from '../container/LandingPage/Specializing';
import PortfolioSection from '../container/LandingPage/Portifolio';
import WhyHireMeSection from '../container/LandingPage/WhyHireMe';
import EmailMeSection from '../container/LandingPage/EmailMe';
import AppLayout from '../container/AppLayout';

import firebase from '../firebase';

const Home = () => {
  const newTabHandler = useCallback(route => {
    window.open(route, '_blank');
  }, []);

  firebase.analytics().setCurrentScreen('Home Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'Home Page',
  });

  return (
    <>
      <ReactHelmet>
        <title>Home</title>
      </ReactHelmet>

      <AppLayout>
        <HeroSection
          {...{
            onClickCVHandler: () =>
              newTabHandler(
                "https://firebasestorage.googleapis.com/v0/b/palashg7563-blog-d9d54.appspot.com/o/Palash's%20Resume.pdf?alt=media&token=4f9e7a43-c3cf-452f-8c68-3365663401f2",
              ),
          }}
        />
        <AboutMeSection />
        <PortfolioSection />
        <SpecializingSection />
        <WhyHireMeSection />
        <EmailMeSection />
      </AppLayout>
    </>
  );
};

export default Home;
