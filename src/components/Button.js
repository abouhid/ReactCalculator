import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { value } = props;
  return (
    <button
      type="button"
    >
      { value }
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Button;
