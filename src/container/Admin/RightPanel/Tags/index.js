import React, { useState, useCallback } from 'react';

import useTags from '../../../../hooks/useTags';
import Title from '../../../../components/Common/Title';
import SubTitle from '../../../../components/Common/SubTitle';
import TagsContainer from './styles/TagsContainer';

import Input from '../../../../components/Common/Input';
import Label from '../../../../components/Common/Label';
import Button from '../../../../components/Common/Button';

import db, { COLLECTIONS } from '../../../../firebase/database';

const Tags = () => {
  const [newTag, setNewTags] = useState('');

  const { error, loading, tags } = useTags();

  const onSubmitHandler = useCallback(
    async e => {
      e.preventDefault();
      await e.persist();

      await db.collection(COLLECTIONS.tags).add({
        name: newTag,
      });
    },
    [newTag],
  );

  if (error) {
    return <div>SomeThings wrong happen while fetching the Tags</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title>All Tags</Title>
      <TagsContainer>
        {tags.map(({ name }) => {
          return <SubTitle key={name}>{name}</SubTitle>;
        })}
      </TagsContainer>

      <hr style={{ width: '100%' }} />

      <Title>Create Tags</Title>

      <form onSubmit={onSubmitHandler}>
        <TagsContainer>
          <Label>Tags:</Label>
          <Input value={newTag} onChange={e => setNewTags(e.target.value)} />
        </TagsContainer>

        <Button type="submit">Create</Button>
      </form>
    </>
  );
};

export default Tags;
