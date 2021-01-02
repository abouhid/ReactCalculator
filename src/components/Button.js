import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    value,
    onClick,
  } = props;
  const handleClick = (value => onClick(value));

  return (
    <button type="button" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
