import { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';

const useFirebaseImage = url => {

  const [{ loading, error, downloadUrl }, setState] = useState({
    loading: true,
    error: false,
    downloadUrl: ""
  })

  useEffect(() => {
    if (url !== undefined) {
      firebase
        .storage()
        .ref(url)
        .getDownloadURL()
        .then(url => {
          setState({
            loading: false,
            downloadUrl: url
          })
        })
        .catch(() => {
          setState({
            loading: false,
            error: true
          })
        });
    }
  }, [url]);

  return {
    loading,
    error,
    downloadUrl,
  };
};

export default useFirebaseImage;
