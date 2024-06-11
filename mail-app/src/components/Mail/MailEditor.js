import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './MailEditor.module.css';

/*
import { convertFromRaw, convertFromHTML } from 'draft-js';
//Example of data converion
const raw = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: 'Initialized from content state.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
//Converting data
console.log(convertFromRaw(raw));
console.log(convertFromHTML(html));
*/

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