import React from 'react';
import firebase from '../../firebase';

import AppLayout from '../../container/AppLayout';
import AllBlogsContainer from '../../container/AllBlogs';
import UnderlineTitle from '../../components/Common/UnderLineTitle';

import Container from './styles/Container';
import TitleContainer from './styles/TitleContainer';

const AllBlogs = () => {
  firebase.analytics().setCurrentScreen('All Blogs Page', {
    global: true,
  });

  firebase.analytics().logEvent('screen_view', {
    screen: 'All Blogs Page',
  });

  return (
    <AppLayout>
      <Container>
        <TitleContainer>
          <UnderlineTitle>All Blogs</UnderlineTitle>
        </TitleContainer>
        <AllBlogsContainer />
      </Container>
    </AppLayout>
  );
};

export default AllBlogs;
