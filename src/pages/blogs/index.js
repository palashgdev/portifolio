import React from 'react';

import AppLayout from '../../container/AppLayout';
import firebase from '../../firebase';
import Container from './styles/Container';

import AllBlogsHeaderBlog from '../../container/AllBlogsHeaderBlog';
import TrendingBlogs from '../../container/TrendingBlogs';

const BlogsPage = () => {
  firebase.analytics().setCurrentScreen('Blogs Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'Blogs Page',
  });

  return (
    <AppLayout>
      <Container>
        <AllBlogsHeaderBlog />
        <TrendingBlogs />
      </Container>
    </AppLayout>
  );
};

export default BlogsPage;
