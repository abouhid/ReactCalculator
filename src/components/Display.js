import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { amount } = props;
  return (
    <div className="display">
      {amount}
    </div>
  );
};

Display.defaultProps = {
  amount: '0',
};

Display.propTypes = {
  amount: PropTypes.string,
};

export default Display;
