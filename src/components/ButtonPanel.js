import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { onClick } = props;
  return (
    <div className="panel">
      <div className="group1">
        <Button onClick={onClick} value="AC" />
        <Button onClick={onClick} value="+/-" />
        <Button onClick={onClick} value="%" />
        <Button onClick={onClick} value="÷" />
      </div>
      <div className="group2">
        <Button onClick={onClick} value="8" />
        <Button onClick={onClick} value="9" />
        <Button onClick={onClick} value="7" />
        <Button onClick={onClick} value="X" />
      </div>
      <div className="group3">
        <Button onClick={onClick} value="4" />
        <Button onClick={onClick} value="5" />
        <Button onClick={onClick} value="6" />
        <Button onClick={onClick} value="-" />
      </div>
      <div className="group4">
        <Button onClick={onClick} value="1" />
        <Button onClick={onClick} value="2" />
        <Button onClick={onClick} value="3" />
        <Button onClick={onClick} value="+" />
      </div>
      <div className="group5">
        <Button onClick={onClick} value="0" />
        <Button onClick={onClick} value="." />
        <Button onClick={onClick} value="=" />

      </div>
    </div>
  );
}
ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
