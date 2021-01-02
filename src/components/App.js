import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const newState = Calculate(this.state, btnName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="App">
        <h1>React Calculator</h1>
        <Display amount={next || total || '0'} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
