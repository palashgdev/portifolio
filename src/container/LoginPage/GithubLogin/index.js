import React, { useCallback, useState } from 'react';
import firebase from '../../../firebase';
import GithubLoginComponent from '../../../components/LoginPage/GithubLogin';

const GithubLogin = () => {
  const [error, setError] = useState(false);

  const onClickHandler = useCallback(async () => {
    try {
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      provider.setCustomParameters({
        allow_signup: 'false',
      });
      const response = await firebase.auth().signInWithPopup(provider);
      firebase.analytics().logEvent('login', {
        method: 'github',
      });

      firebase.analytics().setUserId(response.user.uid, {
        global: true,
      });
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, []);

  console.log(error);
  return (
    <>
      <GithubLoginComponent
        {...{
          onClickHandler,
        }}
      />
    </>
  );
};

export default GithubLogin;
