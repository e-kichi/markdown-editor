import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
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

  edit(text) {
    this.setState({ value: text });
  }

  render() {
    return (
      <div className="clearfix App" id="app">
        <SplitPane
          split="vertical"
          minSize={100}
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
      </div>
    );
  }
}

export default App;
