import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => (
  <button type="button" onClick={() => onClick(value)}>
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
