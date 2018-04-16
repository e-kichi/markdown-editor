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

/* eslint-disable react/no-danger */
const Preview = props => (
  <div
    id="preview"
    style={style}
    dangerouslySetInnerHTML={{ __html: marked(props.value) }}
  />
);

Preview.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Preview;
