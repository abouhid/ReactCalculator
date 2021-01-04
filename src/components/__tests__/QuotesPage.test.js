import React from 'react';
import renderer from 'react-test-renderer';
import QuotesPage from '../../pages/QuotesPage';

describe('QuotesPage', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<QuotesPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});