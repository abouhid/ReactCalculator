import React from 'react';
import Home from '../../pages/Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
