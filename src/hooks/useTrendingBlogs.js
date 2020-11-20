import { useState, useEffect } from 'react';

import db, { COLLECTIONS } from '../firebase/database';

const useTrendingBlogs = () => {
  const [{ loading, post }, setState] = useState({
    loading: true,
    post: []
  })

  useEffect(() => {
    const subscribe = db
      .collection(COLLECTIONS.blogs)
      .where("isHeaderBlog", "==", false)
      .orderBy("createDate", "desc")
      .limit(3)
      .onSnapshot({
        includeMetadataChanges: true
      }, (snapshot) => {
        const temp = []
        snapshot.docs.forEach(e => {
          temp.push(e.data())
        })
        setState({
          loading: false,
          post: temp
        })
      })

    return () => subscribe;
  }, []);
  return {
    loading,
    post,
  };
};

export default useTrendingBlogs;
