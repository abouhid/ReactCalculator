import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

describe('Home', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});