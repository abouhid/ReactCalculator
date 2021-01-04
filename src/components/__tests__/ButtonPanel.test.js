import React from 'react';
import ButtonPanel from '../ButtonPanel';
import { render, cleanup } from '@testing-library/react';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(cleanup);

test('Should render all 19 buttons', () => {
  const { container } = render(<ButtonPanel onClick={() => {}} />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});
