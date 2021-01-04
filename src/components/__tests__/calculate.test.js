import Calculate from '../../logic/calculate';

let obj = null;
beforeEach(() => {
  obj = {
    total: null,
    next: null,
    operation: null,
  };
});

test('Tests the \'=\' button, 2+3 = 5', () => {
  obj.total = 2;
  obj.next = 3;
  obj.operation = '+';
  const container = Calculate(obj, '=');
  expect(container.total).toBe('5');
});

test('Tests the \'%\' button, 2 % = 0.02', () => {
  obj.total = 2;
  const container = Calculate(obj, '%');
  expect(container.total).toBe('0.02');
});
test('Tests the \'+/-\' button, returning -6', () => {
  obj.total = 6;
  const container = Calculate(obj, '+/-');
  expect(container.total).toBe('-6');
});
test('Tests the \'A/C\' button, returning null', () => {
  obj.total = 6;
  const container = Calculate(obj, 'AC');
  expect(container.total).toBe(null);
});
test('Tests the \'.\' button, returning 9.', () => {
  obj.total = 9;
  const container = Calculate(obj, '.');
  expect(container.total).toBe('9.');
});
