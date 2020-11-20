import React, { useCallback } from 'react';
import Section from './styles/Section';
import NotFoundIcon from '../../icons/NotFound';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const { push } = useHistory();

  const onClickHandler = useCallback(() => {
    push('/');
  }, [push]);

  return (
    <Section>
      <NotFoundIcon
        {...{
          onClickHandler,
        }}
      />
    </Section>
  );
};

export default NotFound;
