import React from "react";
import PropTypes from "prop-types";

import Title from "./styles/Title";
import Container from "./styles/Container";
import Circle from "./styles/Circle";
import Content from "./styles/Content";
import SubTitle from "./styles/SubTitle";

const List = ({ title, date }) => (
  <Container>
    <Content left>
      <Circle />
    </Content>

    <Content>
      <Title>{title}</Title>
      <SubTitle>{date}</SubTitle>
    </Content>
  </Container>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default List;
