import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Dropzone from 'react-dropzone';
import './App.css';
import Editor from './editor';
import Preview from './preview';
import './split-pane.css';

class App extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.onSplitterDragFinished = this.onSplitterDragFinished.bind(this);
    this.edit = this.edit.bind(this);
    this.readFile = this.readFile.bind(this);
    this.state = {
      value: '',
      editor: undefined,
    };
  }

  onDrop(acceptedFiles) {
    const acceptedFile = acceptedFiles[0];
    this.readFile(acceptedFile);
  }

  onSplitterDragFinished() {
    if (this.state === undefined
        || this.state.editor === undefined
        || this.state.editor.onResize === undefined) {
      return;
    }
    this.state.editor.onResize();
  }

  edit(text) {
    this.setState({ value: text });
  }

  readFile(fileInformation) {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.edit(event.target.result);
    };
    reader.readAsText(fileInformation);
  }

  render() {
    return (
      <div className="clearfix App" id="app">
        <Dropzone
          style={{}}
          disableClick
          multiple={false}
          onDrop={(a) => { this.onDrop(a); }}
        >
          <SplitPane
            split="vertical"
            minSize={300}
            defaultSize={300}
            onDragFinished={() => { this.onSplitterDragFinished(); }}
          >
            <Editor
              edit={this.edit}
              value={this.state.value}
              ref={(ref) => { this.state.editor = ref; }}
            />
            <Preview
              value={this.state.value} // markedでhtmlにパースするときのデータ
            />
          </SplitPane>
        </Dropzone>
      </div>
    );
  }
}

export default App;
