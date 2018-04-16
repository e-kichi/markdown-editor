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
    this.onResize = this.onResize.bind(this);
    this.state = {
      reactAceEditor: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onChange(text) {
    this.props.edit(text);
  }

  onResize() {
    if (this.state === undefined
        || this.state.reactAceEditor === undefined
        || this.state.reactAceEditor.editor === undefined
        || this.state.reactAceEditor.editor.resize === undefined) {
      return;
    }
    this.state.reactAceEditor.editor.resize();
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
        ref={ref => (this.state.reactAceEditor = ref)}
      />
    );
  }
}

Editor.propTypes = {
  edit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
