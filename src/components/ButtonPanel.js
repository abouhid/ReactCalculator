import React from 'react';
import Buttons from './Button';

export default function ButtonPanel() {
  return (
    <div className="panel">
      <div className="group1">
        <Buttons value="AC" />
        <Buttons value="+/-" />
        <Buttons value="%" />
        <Buttons value="÷" />
      </div>
      <div className="group2">
        <Buttons value="8" />
        <Buttons value="9" />
        <Buttons value="7" />
        <Buttons value="X" />
      </div>
      <div className="group3">
        <Buttons value="4" />
        <Buttons value="5" />
        <Buttons value="6" />
        <Buttons value="-" />
      </div>
      <div className="group4">
        <Buttons value="1" />
        <Buttons value="2" />
        <Buttons value="3" />
        <Buttons value="+" />
      </div>
      <div className="group5">
        <Buttons value="0" />
        <Buttons value="." />
        <Buttons value="=" />

      </div>
    </div>
  );
}
