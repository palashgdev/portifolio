import React, { useCallback } from 'react';
import firebase from '../../../firebase';

import GoogleLoginComponent from '../../../components/LoginPage/GoogleLogin';

const GoogleLogin = () => {
  const onClickHandler = useCallback(async () => {
    try {
      firebase.auth().useDeviceLanguage();
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        login_hint: 'palashgdev@gmail.com',
      });
      const response = await firebase.auth().signInWithPopup(provider);

      firebase.analytics().logEvent('login', {
        method: 'google',
      });

      firebase.analytics().setUserId(response.user.uid, {
        global: true,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <GoogleLoginComponent
      {...{
        onClickHandler,
      }}
    />
  );
};

export default GoogleLogin;
