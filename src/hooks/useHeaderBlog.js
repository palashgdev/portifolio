import { useState, useEffect } from 'react';

import db, { COLLECTIONS } from '../firebase/database';

const useHeaderBlog = () => {
  const [{ loading, post }, setState] = useState({
    loading: true,
    post: {}
  })
  useEffect(() => {
    const subscribe = db
      .collection(COLLECTIONS.blogs)
      .where('isHeaderBlog', '==', true)
      .onSnapshot({
        includeMetadataChanges: true
      }, (snapshot) => {
        snapshot.docChanges().forEach(function (change) {
          setState({
            loading: false,
            post: change.doc.data()
          })
        })
      })

    return () => subscribe;
  }, []);
  return {
    loading,
    post,
  };
};

export default useHeaderBlog;
