/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import Header from '../Header';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
