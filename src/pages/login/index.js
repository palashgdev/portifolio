import React from 'react';
import LoginContainer from '../../container/LoginPage';
import AppLayout from '../../container/AppLayout';

import firebase from '../../firebase';

const Login = () => {
  firebase.analytics().setCurrentScreen('Login Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'Login',
  });

  return (
    <AppLayout>
      <LoginContainer />
    </AppLayout>
  );
};

export default Login;
