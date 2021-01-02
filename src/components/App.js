import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  // eslint-disable-next-line no-console
  console.log(Calculate);
  return (

    <div className="App">
      <h1>React Calculator</h1>
      <Display />
      <ButtonPanel />

    </div>
  );
};

export default App;
