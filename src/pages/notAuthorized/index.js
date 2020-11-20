import React from 'react';
import firebase from '../../firebase';

const NotAuthorized = () => {
  firebase.analytics().setCurrentScreen('NotAuthorized Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'NotAuthorized',
  });

  return (
    <>
      <div>Not NotAuthorized</div>
    </>
  );
};

export default NotAuthorized;
