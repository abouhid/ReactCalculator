import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { name } = props;
  Display.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return (
    <button type="button">
      {name}
    </button>
  );
}

export default Display;
