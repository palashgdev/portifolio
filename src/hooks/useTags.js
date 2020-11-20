import { useEffect, useState } from 'react';
import firebase from '../firebase/database';

import { COLLECTIONS } from '../firebase/database';

const useTags = () => {
  const [{ tags, loading, error }, setState] = useState({
    loading: true,
    error: false,
    tags: []
  })

  useEffect(() => {
    const unsubscribe = firebase
      .collection(COLLECTIONS.tags)
      .get()
      .then(snapshot => {
        const temp = [];

        snapshot.docs.forEach(doc => {
          temp.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setState({
          loading: false,
          tags: temp
        })
      })
      .catch(err => {
        console.error(err);
        setState({
          error: false
        })
      });

    return () => {
      return unsubscribe;
    };
  }, []);
  return {
    error,
    loading,
    tags,
  };
};

export default useTags;
