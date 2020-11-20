import React, { useState, useCallback } from 'react';

import SubscriberFormComponent from '../../components/SubscriberForm';

const Subscriber = () => {
  const [email, setEmail] = useState('');

  const onChangeHandler = useCallback(({ fun, value }) => {
    fun(value);
  }, []);

  return (
    <SubscriberFormComponent
      {...{
        email,
        emailOnChangeHandler: e => onChangeHandler({ fun: setEmail, value: e.target.value }),
      }}
    />
  );
};

export default Subscriber;
