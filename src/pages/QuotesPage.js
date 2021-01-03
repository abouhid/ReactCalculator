import React from 'react';
import quotesdata from '../data/quotesdata';

const Quotes = () => {
  const quoteList = quotesdata.map(item => (

    <div className="quote-container" key={item.id}>
      <img alt="img" src={item.src} />
      <div className="side-text ">

        <h2>
          &quot;
          {item.quote}
          &quot;
        </h2>
        <h4>
          -
          {item.author}
        </h4>
      </div>

    </div>
  ));
  return (

    <div className="App">
      {quoteList}
    </div>
  );
};

export default Quotes;
