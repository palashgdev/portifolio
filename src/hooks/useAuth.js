import { useState, useEffect } from 'react';

const useAuth = auth => {

  const [{ user, loading, error }, setState] = useState({
    user: auth().currentUser,
    loading: true,
    error: false
  })

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(
      user => {
        if (user !== null) {
          setState({
            user: user,
            loading: false,
            error: false
          })
        }
        setState({
          loading: false,
          error: false,
          user: auth().currentUser
        })
      }, () => {
        setState({
          loading: false,
          error: true,
          user: auth().currentUser
        })
      }
    );

    return () => {
      subscribe();
    };
  }, [auth]);

  return [user, loading, error];
};

export default useAuth;
