import React, { useEffect } from 'react';

import firebase from '../firebase';
import { COLLECTIONS } from '../firebase/database';

const useBlogs = () => {
  const [{ post, loading, error }, setState] = React.useState({
    loading: true,
    error: false,
    post: [],
  });

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(COLLECTIONS.blogs)
      .orderBy('createDate', 'desc')
      .get()
      .then(snapshot => {
        const temp = [];
        snapshot.docChanges().forEach(e => {
          temp.push(e.doc.data());
        });
        setState({
          loading: false,
          error: false,
          post: temp,
        });
      })
      .catch(err => {
        setState({
          loading: false,
          error: true,
          post: [],
        });
        console.error(err);
      });
    return () => {
      return unsubscribe;
    };
  }, []);

  return {
    error,
    loading,
    post,
  };
};

export default useBlogs;
