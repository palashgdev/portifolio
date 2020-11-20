import React, { useState, useCallback } from 'react';

import List from './styles/List';
import ListItem from './styles/ListItem';
import Content from './styles/Content';

import Title from './Title';
import Editor from './Editor';
import Publish from './Publish';

import firebase from '../../../../firebase';
import db, { COLLECTIONS } from '../../../../firebase/database';

const CreatePost = () => {
  const [{ editor, title, publish }, setState] = useState({
    title: true,
    editor: false,
    publish: false,
  });

  const [{ title: titleOfPost, description }, setTitleDescription] = useState({
    title: '',
    description: '',
  });
  const [editorState, setEditorState] = useState('');
  const [file, setFile] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const publishOnClickHandler = useCallback(async () => {
    const storageImage = firebase.storage().ref(`/blogs/${file.name}`);
    const imageResponse = storageImage.put(file, {
      contentType: file.type,
    });
    imageResponse.on(
      'state_changed',
      snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
          default:
            console.log('Firebase is running');
        }
      },
      err => {
        console.error(err);
      },
      async () => {
        imageResponse.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);

          const blogRef = db.collection(COLLECTIONS.blogs).doc();

          blogRef.set({
            blogId: blogRef.id,
            title: titleOfPost,
            description,
            blogContent: editorState.toHTML(),
            blogView: 0,
            blogClaps: 0,
            coverImageUrl: `/blogs/${file.name}`,
            coverImageDownloadUrl: downloadURL,
            isHeaderBlog: false,
            author: 'Palash Gupta',
            authorEmail: 'me@palashg.dev',
            tags: selectedTags,
            createDate: new Date(),
          })
            .then(e => {
              console.log('Success', e);
            })
            .catch(e => {
              console.error(e, 'error');
            });
        });
      },
    );
  }, [description, editorState, file, selectedTags, titleOfPost]);

  return (
    <>
      <List>
        <ListItem
          onClick={() =>
            setState({
              editor: false,
              title: true,
              publish: false,
            })
          }
        >
          Title
        </ListItem>

        <ListItem
          onClick={() =>
            setState({
              editor: true,
              title: false,
              publish: false,
            })
          }
        >
          Content
        </ListItem>
        <ListItem
          onClick={() =>
            setState({
              editor: false,
              title: false,
              publish: true,
            })
          }
        >
          Publish
        </ListItem>
      </List>

      <Content>
        {title && (
          <Title
            {...{
              titleOfPost,
              description,

              descriptionOnChangeHandler: e =>
                setTitleDescription({
                  title: titleOfPost,
                  description: e.target.value,
                }),

              titleOnChangeHandler: e =>
                setTitleDescription({
                  title: e.target.value,
                  description: description,
                }),
            }}
          />
        )}
        {editor && (
          <Editor
            {...{
              editorState,
              setEditorState,
            }}
          />
        )}
        {publish && (
          <Publish
            {...{
              fileUploadHandler: e => setFile(e.target.files[0]),
              publishOnClickHandler,
              selectedTags,
              setSelectedTags,
            }}
          />
        )}
      </Content>
    </>
  );
};

export default CreatePost;
