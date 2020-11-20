import React from 'react';

import useTrendingBlogs from '../../hooks/useTrendingBlogs';

import SkeltonLoading from '../../components/SkeltonLoading';
import Slider from '../../components/Slider';
import Title from '../../components/Common/UnderLineTitle';

import Button from './styles/AllBlogsButton';
import BlogContainer from './styles/BlogContainer';
import TitleContainer from './styles/TitleContainer';

import { useHistory } from 'react-router-dom';

const TrendingBlogs = () => {
  const { loading, post } = useTrendingBlogs();
  const { push } = useHistory();

  const blogs = post.map((e, index) => ({
    index,
    headline: e.title,
    src: e.coverImageDownloadUrl,
    buttonLink:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/blog/${e.blogId}`
        : `https://palashg.dev/blog/${e.blogId}`,
  }));

  return (
    <>
      <TitleContainer>
        <Title>Trending</Title>
        <Button onClick={() => push('/allblogs')}>All Blogs</Button>
      </TitleContainer>

      <BlogContainer>
        {loading && <SkeltonLoading mobileHeight="30vh" desktopHeight="65vmin" />}
        {!loading && <Slider slides={blogs} />}
      </BlogContainer>
    </>
  );
};

export default TrendingBlogs;
