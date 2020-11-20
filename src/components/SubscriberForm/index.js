import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Common/Title';
import Button from '../Common/Button';

import Label from './styles/Label';
import Form from './styles/Form';
import Input from './styles/Input';
import InputContainer from './styles/InputContainer';

const { REACT_APP_MAIL_CHIMP } = process.env;

const SubscriberForm = ({ email, emailOnChangeHandler }) => (
  <Form
    action={`https://dev.us19.list-manage.com/subscribe/post?u=${REACT_APP_MAIL_CHIMP}&amp;id=8c1d601f14`}
    method="post"
    target="_blank"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    noValidate
  >
    <Title>Subscribe</Title>

    <InputContainer>
      <Label htmlFor="email">Email:</Label>
      <Input name="EMAIL" onChange={emailOnChangeHandler} type="email" value={email} id="mce-EMAIL" />
    </InputContainer>

    <div>
      <Button type="submit">Subscribe</Button>
    </div>
  </Form>
);

SubscriberForm.propTypes = {
  emailOnChangeHandler: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default SubscriberForm;
