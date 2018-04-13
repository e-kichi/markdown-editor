import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './marked.css';

const style = {
  width: '50%',
};

export default class Preview extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div
        id="preview"
        /* eslint-disable-line react/no-danger */
        dangerouslySetInnerHTML={{ __html: marked(this.props.value) }}
        style={style}
      />
    );
  }
}

Preview.propTypes = {
  value: PropTypes.string.isRequired,
};
