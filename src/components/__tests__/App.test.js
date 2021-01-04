import React from 'react';
import App from '../../pages/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
