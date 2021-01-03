import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import Home from './pages/Home';
import QuotesPage from './pages/QuotesPage';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
        <Route path="/calculator">
          <App />

        </Route>
      </Switch>

    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
