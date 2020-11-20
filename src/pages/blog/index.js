import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useBlogs from '../../hooks/useBlog';

import AppLayout from '../../container/AppLayout';
import BlogHeroSection from '../../container/BlogHeroSection';
import BlogContentContainer from '../../container/BlogContent';

import QuaterCircle from '../../icons/LandingPage/QuaterCircle';

import FaceBookIcon from '../../icons/Footer/FaceBookIcon';
import TwitterIcon from '../../icons/Footer/TwitterIcon';
import InstaGramIcon from '../../icons/Footer/InstagramIcon';
import LinkedinIcon from '../../icons/Footer/LinkedinIcon';

import LeftQuaterCircleContainer from './styles/LeftQuaterCircleContainer';
import RightQuaterCircleContainer from './styles/RightQuaterCircleContainer';
import BlogContainer from './styles/BlogContainer';
import IconContainer from './styles/IconContainer';

import firebase from '../../firebase';

const Blog = () => {
  const { id } = useParams();

  const { loading: postLoading, error: postError, post } = useBlogs(id);

  firebase.analytics().setCurrentScreen('Blog Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'Blog',
    blogId: id,
  });

  useEffect(() => {
    //make the view count sent to firebase store
  }, []);

  if (postError) {
    return <div>Error While Fetching the post</div>;
  }

  if (postLoading === false && post === undefined) {
    return <div>Post Does Not Exist</div>;
  }

  return (
    <>
      <AppLayout>
        <BlogHeroSection {...{ downloadUrl: (post || {}).coverImageUrl }} />
        <BlogContainer>
          <IconContainer>
            <FaceBookIcon />
            <TwitterIcon />
            <InstaGramIcon />
            <LinkedinIcon />
          </IconContainer>

          <BlogContentContainer
            {...{
              blogContent: (post || {}).blogContent,
              postLoading,
              blogTitle: (post || {}).title,
              blogDescription: (post || {}).description,
              createdDate: (post || {}).createDate,
              tags: (post || {}).tags,
              author: (post || {}).author,
            }}
          />

          <RightQuaterCircleContainer>
            <QuaterCircle />
          </RightQuaterCircleContainer>

          <LeftQuaterCircleContainer>
            <QuaterCircle />
          </LeftQuaterCircleContainer>
        </BlogContainer>
      </AppLayout>
    </>
  );
};

export default Blog;
