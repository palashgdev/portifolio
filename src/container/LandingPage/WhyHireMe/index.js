import React from "react";
import PropTypes from "prop-types";

import Section from "./styles/Section";
import Container from "./styles/Container";
import TitleContainer from "./styles/TitleContainer";

import Title from "../../../components/Common/Title";
import SubTitle from "../../../components/Common/SubTitle";

import List from "./List";

const WhyHireMe = () => {
  const experience = [
    {
      title: "Full Stack Developer @ HST (Remote)",
      date: "Jun 19 to Present"
    },
    {
      title: "Student Partner @ Microsoft",
      date: "Aug 2017 - May 2019"
    },
    {
      title: "Software Developer @ Mayash",
      date: "Sept 17 - Jul 2018"
    }
  ];

  return (
    <Section>
      <Container>
        <TitleContainer>
          <Title>Why Hire Me</Title>
          <SubTitle>
            I believe that my experience with technology, specifically in the
            web development space, make me the best match.
          </SubTitle>
        </TitleContainer>
      </Container>

      <Container>
        {experience.map(({ title, date }) => (
          <List
            key={title}
            {...{
              title,
              date
            }}
          />
        ))}
      </Container>
    </Section>
  );
};

WhyHireMe.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
};

export default WhyHireMe;
