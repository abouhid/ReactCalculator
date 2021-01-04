import React from 'react';
import QuotesPage from '../../pages/QuotesPage';
import renderer from 'react-test-renderer';

describe('QuotesPage', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<QuotesPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
