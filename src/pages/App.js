import React, { useState } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [obj, setObj] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );
  const handleClick = btnName => {
    const newState = Calculate(obj, btnName);
    setObj(newState);
  };

  return (

    <div className="App">
      <Display amount={obj.next || obj.total || '0'} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default App;
