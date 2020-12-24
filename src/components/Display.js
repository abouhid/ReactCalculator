import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  Display.defaultProps = {
    result: '0',
  };
  Display.propTypes = {
    result: PropTypes.string,
  };

  return (
    <div className="display">
      {result}
    </div>
  );
}

export default Display;
