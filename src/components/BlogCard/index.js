import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from './styles/CardContainer';
import Content from './styles/Content';
import LazyImage from './LazyLoadImage';
import CardTitle from './styles/CardTitle';
import CardTopContent from './styles/CardTopContent';
import TagContainer from './styles/TagContainer';
import LightTitle from './styles/LightTitle';
import Description from './styles/Description';
import { useHistory } from 'react-router-dom';

import getMonth from '../../lib/getMonth';

const BlogCard = ({ coverImageDownloadUrl, title, tags, createDate, description, blogId }) => {
  const date = new Date(createDate.toDate());
  const { push } = useHistory();

  return (
    <>
      <CardContainer onClick={() => push(`/blog/${blogId}`)}>
        <Content left>
          <CardTopContent>
            <LightTitle>{`${getMonth(date.getMonth())},${date.getFullYear()}`}</LightTitle>

            <TagContainer>
              {tags.map(e => (
                <LightTitle key={e.id}>{`#${e.name}`}</LightTitle>
              ))}
            </TagContainer>
          </CardTopContent>
          <CardTitle>{title}</CardTitle>

          <CardTopContent>
            <Description>{description}</Description>
          </CardTopContent>
        </Content>

        <Content right>
          <LazyImage src={coverImageDownloadUrl} alt={title} />
        </Content>
      </CardContainer>
      <hr />
    </>
  );
};
BlogCard.propTypes = {
  coverImageDownloadUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  createDate: PropTypes.shape({
    toDate: PropTypes.func.isRequired,
  }).isRequired,
  blogId: PropTypes.string.isRequired,
};
export default BlogCard;
