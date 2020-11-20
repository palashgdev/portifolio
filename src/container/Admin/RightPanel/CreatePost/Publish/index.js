import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/Common/Button';
import Title from '../../../../../components/Common/Title';

import useTags from '../../../../../hooks/useTags';
import Chip from './styles/Chip';
import ChipContainer from './styles/ChipContainer';
import ChipWrapper from './styles/ChipWrapper';

const Publish = ({ fileUploadHandler, publishOnClickHandler, selectedTags, setSelectedTags }) => {
  const { loading, error, tags } = useTags();

  if (loading) {
    return <div>Fetching the Tags</div>;
  }

  if (error) {
    return <div>Error While Loading the Tags</div>;
  }

  return (
    <>
      <Title style={{ textAlign: 'center' }}>Tags for the Post</Title>
      <ChipWrapper>
        {/* render the tags from the server */}
        <ChipContainer>
          {tags.map(({ id, name }) => (
            <Chip
              onClick={() => {
                setSelectedTags([
                  ...selectedTags,
                  {
                    name,
                    id,
                  },
                ]);
              }}
              key={id}
            >
              {name}
            </Chip>
          ))}
        </ChipContainer>

        {/* render the selected tags for the post */}
        <ChipContainer>
          {selectedTags.map(({ name, id }) => (
            <Chip
              onClick={() =>
                setSelectedTags([
                  ...selectedTags.slice(
                    0,
                    selectedTags.findIndex(names => names.name === name),
                  ),
                  ...selectedTags.slice(selectedTags.findIndex(names => names.name === name) + 1, selectedTags.length),
                ])
              }
              key={id}
            >
              {name}
            </Chip>
          ))}
        </ChipContainer>
      </ChipWrapper>

      <input onChange={fileUploadHandler} type="file" accept="image/png, image/jpeg" required />
      <Button onClick={publishOnClickHandler}>Publish</Button>
    </>
  );
};

Publish.propTypes = {
  fileUploadHandler: PropTypes.func.isRequired,
  publishOnClickHandler: PropTypes.func.isRequired,
  setSelectedTags: PropTypes.func.isRequired,

  selectedTags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Publish;
