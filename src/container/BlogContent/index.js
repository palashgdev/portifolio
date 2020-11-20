import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import BraftEditor from 'braft-editor';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/code-highlighter.css';

//styles
import Content from './styles/Content';
import SubTitleContainer from './styles/SubTitleContainer';
import TagsContainer from './styles/TagsContainer';
import HRContainer from './styles/HRContainer';
import AuthorImage from './styles/AuthorImage';
import WrittenBy from './styles/WrittenBy';
import AuthorName from './styles/AuthorName';
import WrittenContainer from './styles/WrittenContainer';

import getMonthName from '../../lib/getMonth';

//common components
import Tag from '../../components/Tag';
import SubTitle from '../../components/Common/SubTitle';
import Title from '../../components/Common/Title';
import SkeltonLoading from '../../components/SkeltonLoading';

const BlogContent = ({ blogContent, postLoading, blogTitle, blogDescription, createdDate, tags, author }) => {
  if (postLoading) {
    return (
      <Content>
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
      </Content>
    );
  }

  const blogCreatedDate = new Date(createdDate.toDate());

  return (
    <Content>
      <SubTitleContainer>
        <SubTitle>
          {/* Date */}
          {`${getMonthName(blogCreatedDate.getMonth())} ${blogCreatedDate.getDay()},${blogCreatedDate.getFullYear()}`}
        </SubTitle>
      </SubTitleContainer>

      <Title>{blogTitle}</Title>

      <SubTitleContainer>
        <SubTitle>{blogDescription}</SubTitle>
      </SubTitleContainer>

      <Container>
        <BraftEditor
          draftProps={{
            editorState: BraftEditor.createEditorState(blogContent),
          }}
          language="en"
          controls={[]}
          readOnly={true}
        ></BraftEditor>
      </Container>

      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag.name}>{tag.name}</Tag>
        ))}
      </TagsContainer>

      <HRContainer hr>
        <hr />
      </HRContainer>

      <HRContainer>
        <div>
          <AuthorImage src="/photos/palash.png" alt="palashgdev" />
        </div>
        <WrittenContainer>
          <WrittenBy>Written By:</WrittenBy>
          <AuthorName>{author}</AuthorName>
        </WrittenContainer>
      </HRContainer>
    </Content>
  );
};

BlogContent.propTypes = {
  postLoading: PropTypes.bool.isRequired,
  blogContent: PropTypes.string,
  blogTitle: PropTypes.string,
  blogDescription: PropTypes.string,
  author: PropTypes.string,

  createdDate: PropTypes.shape(),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};

export default BlogContent;
