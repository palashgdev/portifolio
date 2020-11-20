import React, { useState } from 'react';

import Section from './styles/Section';
import Container from './styles/Container';

import SidePanel from './SidePanel';
import RightPanel from './RightPanel';

const AdminPanel = () => {
  const [{ createPost, tags }, setState] = useState({
    createPost: true,
    tags: false,
  });

  return (
    <Section>
      <Container>
        <SidePanel
          {...{
            onClickCreatePostHandler: () =>
              setState({
                createPost: true,
                tags: false,
              }),

            onClickTagsHandler: () =>
              setState({
                createPost: false,
                tags: true,
              }),
          }}
        />

        <RightPanel
          {...{
            createPost,
            tags,
          }}
        />
      </Container>
    </Section>
  );
};

export default AdminPanel;
