import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

const footerStyle = {
  position: 'absolute',
  height: '26px',
  width: '100%',
  backgroundColor: '#c0c0c0',
  bottom: '0',
  paddingTop: '12px',
  paddingBottom: '12px',
  display: 'flex',
  justifyContent: 'space-between',
};

const checkboxWordWrapStyle = {
  width: '150px',
  marginLeft: '24px',
};

const checkboxIconStyle = {
  fill: 'black',
};

const buttonSaveStyle = {
  position: 'relative',
  right: '0px',
  height: '24px',
  marginRight: '24px',
};

const Footer = props => (
  <div style={footerStyle}>
    <Checkbox
      label="Word wrap"
      onCheck={(e, enabled) => { props.onChangeWordWrap(enabled); }}
      iconStyle={checkboxIconStyle}
      style={checkboxWordWrapStyle}
    />
    <RaisedButton
      label="Save"
      default
      style={buttonSaveStyle}
    />
  </div>
);

Footer.propTypes = {
  onChangeWordWrap: PropTypes.func.isRequired,
};

export default Footer;
