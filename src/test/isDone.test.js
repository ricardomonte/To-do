import isDone from '../assets/isDone';

test('return a incomplete', () => {
  const element = isDone(false);
  expect(element).toBe('Incomplete');
});

test('return a complete', () => {
  const element = isDone(true);
  expect(element).toBe('Completed');
});