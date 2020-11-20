import React from 'react';

import AppLayout from '../container/AppLayout';
import NotFoundContainer from '../container/NotFound';
import ReactHelmet from 'react-helmet';
import firebase from '../firebase';

const NotFound = () => {
  firebase.analytics().setCurrentScreen('NotFound Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'Not Found',
  });

  return (
    <>
      <ReactHelmet>
        <title>Not Found</title>
      </ReactHelmet>

      <AppLayout>
        <NotFoundContainer />
      </AppLayout>
    </>
  );
};

export default NotFound;
