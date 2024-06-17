import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './MailEditor.module.css';


const rawContentState = {
    entityMap: {},
    blocks: [
      {
        key: '637gr',
        text: '',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };

export default function MailEditor(props) {
  const [contentState, setContentState] = useState(rawContentState);

  function handleContentStateChange(content) {
    setContentState({ content });
  }

  props.onDoneEditing(contentState);

  return (
    <Editor
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      initialContentState={contentState}
      onContentStateChange={handleContentStateChange}
    />
  );
}