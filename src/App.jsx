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
    this.edit = this.edit.bind(this);
    this.state = {
      value: '',
    };
  }

  onDrop(acceptedFiles) {
    const acceptedFile = acceptedFiles[0];
    this.readFile(acceptedFile);
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
          >
            <Editor
              edit={this.edit}
              value={this.state.value}
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
