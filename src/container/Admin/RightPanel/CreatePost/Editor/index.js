import React from 'react';
import PropTypes from 'prop-types';

import BraftEditor from 'braft-editor';
import BraftTable from 'braft-extensions/dist/table';
import Markdown from 'braft-extensions/dist/markdown';
import HeaderId from 'braft-extensions/dist/header-id';
import CodeHighLighter from 'braft-extensions/dist/code-highlighter';

import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'braft-extensions/dist/code-highlighter.css';

BraftEditor.use([
  BraftTable({
    includeEditors: ['editor-1'],
    defaultColumns: 3,
    defaultRows: 1,
    withDropdown: false,
    columnResizable: false,
    exportAttrString: ' ',
  }),
  CodeHighLighter(
    {
      name: 'JavaScript',
      syntax: 'javascript',
    },
    {
      name: 'HTML',
      syntax: 'html',
    },
    {
      name: 'CSS',
      syntax: 'css',
    },
  ),
  Markdown(),
  HeaderId(),
]);

const Editor = ({ editorState, setEditorState }) => {

  const handlerEditorChange = editorChange => {
    setEditorState(editorChange);
  };


  return (
    <>
      <BraftEditor
        editorId="editor-1"
        allowInsertLinkText
        fixPlaceholder={false}
        imageResizable
        language="en"
        value={editorState}
        lineHeights={['20']}
        onChange={handlerEditorChange}
        // onSave={submitContent}
        fontSizes={['16']}
        draftProps={{
          ariaMultiline: true,
        }}
        imageEqualRatio
      />
    </>
  );
};

Editor.propTypes = {
  editorState: PropTypes.any.isRequired,
  setEditorState: PropTypes.func.isRequired,
};

export default Editor;
