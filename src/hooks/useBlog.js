import React, { useEffect } from 'react';

import firebase from '../firebase';
import { COLLECTIONS } from '../firebase/database';

const useBlog = id => {
  const [{ post, loading, error }, setState] = React.useState({
    loading: true,
    error: false,
    post: {},
  });

  useEffect(() => {
    if (id !== undefined) {
      const unsubscribe = firebase
        .firestore()
        .collection(COLLECTIONS.blogs)
        .doc(id)
        .get()
        .then(snapshot => {
          setState({
            loading: false,
            post: snapshot.data(),
          });
        })
        .catch(err => {
          setState({
            loading: false,
            error: true,
          });
          console.error(err);
        });
      return () => {
        return unsubscribe;
      };
    }
  }, [id]);

  return {
    error,
    loading,
    post,
  };
};

export default useBlog;
