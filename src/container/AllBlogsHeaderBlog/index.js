import React, { useState, useCallback } from 'react';

import Container from './styles/Container';
import Content from './styles/Content';
import Image from './styles/Image';
import TagContainer from './styles/TagContainer';
import SubTitleContainer from './styles/SubTitleContainer';
import DotsContainer from './styles/DotsContainer';

import SkeltonLoading from '../../components/SkeltonLoading';
import Title from '../../components/Common/Title';
import Tag from '../../components/Tag';
import SubTitle from '../../components/Common/SubTitle';
import Button from '../../components/Common/Button';

import useHeaderBlog from '../../hooks/useHeaderBlog';
import Dots from '../../icons/LandingPage/Dots';

import { useHistory } from 'react-router-dom';

const AllBlogHeaderBlog = () => {
  const { loading, post } = useHeaderBlog();
  const [loaded, setLoaded] = useState(false);
  const { push } = useHistory();

  let tags = post.tags || [];

  const onClickHandler = useCallback(() => {
    push(`/blog/${post.blogId}`);
  }, [post.blogId, push]);

  const onClickTagsHandler = useCallback(
    e => {
      e.persist();
      push(`/tags/${e.target.innerText}`);
    },
    [push],
  );

  return (
    <Container>
      <Content left>
        <Image
          src={post.coverImageDownloadUrl}
          alt="coverImage"
          loaded={loaded}
          onLoad={() => {
            setLoaded(true);
          }}
        />

        {loaded && (
          <DotsContainer>
            <Dots />
          </DotsContainer>
        )}

        {!loaded && <SkeltonLoading desktopHeight={'40vh'} mobileHeight={'30vh'} />}
      </Content>

      {loading ? (
        <Content right>
          <SkeltonLoading desktopHeight={'5vh'} />
          <SkeltonLoading desktopHeight={'5vh'} />
          <SkeltonLoading desktopHeight={'5vh'} />
          <SkeltonLoading desktopHeight={'5vh'} />
        </Content>
      ) : (
          <Content right>
            <TagContainer>
              {tags.map(({ id, name }) => (
                <Tag key={id} onClick={onClickTagsHandler}>
                  {name}
                </Tag>
              ))}
            </TagContainer>
            <Title>{post.title}</Title>
            <SubTitleContainer>
              <SubTitle>{post.description}</SubTitle>
            </SubTitleContainer>
            <Button onClick={onClickHandler}>Read More</Button>
          </Content>
        )}
    </Container>
  );
};

export default AllBlogHeaderBlog;
