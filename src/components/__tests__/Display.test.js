/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Display from '../Display';

test('Should render default value', () => {
    const { getByText } = render(<Display amount={undefined} />);
    getByText('0');
  });

test('Should render new result (123)', () => {
  const { getByText } = render(<Display amount='123' />);
  getByText('123');
});


test('Prop types should be required', () => {
    expect(Display.propTypes.amount).toBe(PropTypes.string);
});
  