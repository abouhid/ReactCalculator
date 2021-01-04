/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

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
