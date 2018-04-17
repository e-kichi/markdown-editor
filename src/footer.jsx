import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const footerStyle = {
  position: 'absolute',
  height: '26px',
  width: '100%',
  backgroundColor: '#c0c0c0',
  bottom: '0',
  paddingTop: '12px',
  paddingBottom: '12px',
};

const checkboxWordWrapStyle = {
  width: '150px',
  marginLeft: '24px',
};

const checkboxIconStyle = {
  fill: 'black',
};

const Footer = props => (
  <div style={footerStyle}>
    <Checkbox
      label="Word wrap"
      onCheck={(e, enabled) => { props.onChangeWordWrap(enabled); }}
      iconStyle={checkboxIconStyle}
      style={checkboxWordWrapStyle}
    />
  </div>
);

Footer.propTypes = {
  onChangeWordWrap: PropTypes.func.isRequired,
};

export default Footer;
