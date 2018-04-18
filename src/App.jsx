import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Dropzone from 'react-dropzone';
import DocumentTitle from 'react-document-title';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Editor from './editor';
import Preview from './preview';
import Footer from './footer';
import './split-pane.css';

const splitPaneStyle = {
  height: 'auto',
  top: '0',
  left: '0',
  right: '0',
  bottom: '50px',
};

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
      wrapEnabled: false,
      fileInformation: {
        name: '',
      },
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

  onChangeWrapEnabled(enabled) {
    this.setState({ wrapEnabled: enabled });
  }

  edit(text) {
    this.setState({ value: text });
  }

  readFile(fileInformation) {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.edit(event.target.result);
      this.setState({ fileInformation });
    };
    reader.readAsText(fileInformation);
  }

  render() {
    return (
      <MuiThemeProvider>
        <DocumentTitle title={this.state.fileInformation.name}>
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
                defaultSize={window.innerWidth / 2}
                onDragFinished={() => { this.onSplitterDragFinished(); }}
                style={splitPaneStyle}
              >
                <Editor
                  edit={this.edit}
                  value={this.state.value}
                  wrapEnabled={this.state.wrapEnabled}
                  ref={(ref) => { this.state.editor = ref; }}
                />
                <Preview
                  value={this.state.value} // markedでhtmlにパースするときのデータ
                />
              </SplitPane>
              <Footer
                onChangeWordWrap={(enabled) => { this.onChangeWrapEnabled(enabled); }}
              />
            </Dropzone>
          </div>
        </DocumentTitle>
      </MuiThemeProvider>
    );
  }
}

export default App;
