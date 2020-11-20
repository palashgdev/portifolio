import React from 'react';

import BlogCard from '../../components/BlogCard';
import useBlogs from '../../hooks/useBlogs';

import SkeltonLoading from '../../components/SkeltonLoading';

const AllBlogs = () => {
  const { error, loading, post } = useBlogs();

  if (loading) {
    return (
      <>
        <SkeltonLoading mobileHeight={'20vh'} desktopHeight={'30vh'} />
        <SkeltonLoading mobileHeight={'20vh'} desktopHeight={'30vh'} />
        <SkeltonLoading mobileHeight={'20vh'} desktopHeight={'30vh'} />
        <SkeltonLoading mobileHeight={'20vh'} desktopHeight={'30vh'} />
        <SkeltonLoading mobileHeight={'20vh'} desktopHeight={'30vh'} />
      </>
    );
  }

  if (error) {
    return <>Some Error Happen</>;
  }

  return (
    <>
      {post.map(e => (
        <BlogCard {...e} key={e.title} />
      ))}
    </>
  );
};

export default AllBlogs;
