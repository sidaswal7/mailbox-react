import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './MailEditor.module.css';

export default function MailEditor(props) {
  const [contentState, setContentState] = useState({ content: '' });

  function handleContentStateChange(content) {
    setContentState({ content });
  }

  props.onDoneEditing(contentState.content);

  return (
    <Editor
      editorClassName={styles.editor}
      toolbarClassName={styles.toolbar}
      onContentStateChange={handleContentStateChange}
    />
  );
}