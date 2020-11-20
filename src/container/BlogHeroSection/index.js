import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Banner from './styles/Banner';
import useFirebaseImage from '../../hooks/useFirebaseImage';

import LoadingImage from './LoadingImage';

const BlogHeroSection = ({ downloadUrl }) => {
  const { downloadUrl: imageUrl, loading, error } = useFirebaseImage(downloadUrl);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (loading) {
    return <LoadingImage />;
  }

  if (error) {
    return <div>Error while fetching the cover image</div>;
  }

  return (
    <>
      <Banner
        onLoad={e => {
          setImageLoaded(true);
        }}
        src={imageUrl}
        imageLoaded={imageLoaded}
        alt="coverImage"
      />
      {!imageLoaded && <LoadingImage />}
    </>
  );
};

BlogHeroSection.propTypes = {
  downloadUrl: PropTypes.string,
};

export default BlogHeroSection;
