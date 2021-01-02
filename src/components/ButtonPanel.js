import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { onClick } = props;
  const butOptions = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const list = butOptions.map(value => (

    <div key={value} className="panel-button">
      <Button onClick={onClick} value={value} />

    </div>
  ));

  return (
    <ul className="panel">
      {list}

    </ul>
  );
};
ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
