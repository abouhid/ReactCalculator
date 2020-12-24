import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { value, name } = props;
  return (
    <button
      type="button"
      className={name}
    >
      { value }
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
