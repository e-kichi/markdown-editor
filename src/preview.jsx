import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './marked.css';

const style = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  right: '0px',
  bottom: '0px',
  padding: '10px',
  height: '100%',
  overflow: 'scroll',
};

export default class Preview extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div
        id="preview"
        style={style}
        /* eslint-disable-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: marked(this.props.value) }}
      />
    );
  }
}

Preview.propTypes = {
  value: PropTypes.string.isRequired,
};
