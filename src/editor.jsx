import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/textmate';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    this.props.edit(text);
  }

  render() {
    return (
      <AceEditor
        mode="markdown"  // mode
        theme="textmate" // theme
        width="100%"
        height="100%"
        name="editor" // id
        tabSize={2}
        showPrintMargin={false} // 真ん中らへんの線を消す
        highlightActiveLine // lineのハイライトを消す
        editorProps={{ $blockScrolling: true }}
        onChange={this.onChange}
        value={this.props.value}
      />
    );
  }
}

Editor.propTypes = {
  edit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
