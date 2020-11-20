import React from 'react';
import PropTypes from 'prop-types';

import TextArea from './styles/TextArea';
import Container from './styles/Container';

import Label from '../../../../../components/Common/Label';
import Input from '../../../../../components/Common/Input';

const Title = ({ titleOfPost, description, titleOnChangeHandler, descriptionOnChangeHandler }) => (
  <Container>
    <Label>Title</Label>
    <Input value={titleOfPost} onChange={titleOnChangeHandler} />
    <Label>Description</Label>
    <TextArea value={description} rows={10} onChange={descriptionOnChangeHandler} />
  </Container>
);

Title.propTypes = {
  titleOfPost: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  titleOnChangeHandler: PropTypes.func.isRequired,
  descriptionOnChangeHandler: PropTypes.func.isRequired,
};
export default Title;
