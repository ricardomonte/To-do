import priorityCheck from '../assets/checkPriority';

test('return class name for scss', () => {
  expect(priorityCheck('Important')).toBe('pill-important');
  expect(priorityCheck('Normal')).not.toBe('pill-low');
  expect(priorityCheck('Normal')).toBe('pill-normal');
});