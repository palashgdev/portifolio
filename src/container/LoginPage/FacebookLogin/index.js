import React, { useCallback } from 'react';
import FaceBookLoginComponent from '../../../components/LoginPage/FacebookLogin';
import firebase from '../../../firebase';

const FaceBookLogin = () => {
  const onClickHandler = useCallback(async () => {
    try {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().useDeviceLanguage();
      provider.setCustomParameters({
        display: 'popup',
      });
      firebase.analytics().logEvent('login', {
        method: 'facebook',
      });
      const response = await firebase.auth().signInWithPopup(provider);

      firebase.analytics().setUserId(response.user.uid, {
        global: true,
      });

      firebase.analytics().logEvent('login', {
        method: 'facebook',
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <FaceBookLoginComponent
        {...{
          onClickHandler,
        }}
      />
    </>
  );
};

export default FaceBookLogin;
