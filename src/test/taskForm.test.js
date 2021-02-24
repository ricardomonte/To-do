import taskForm from '../assets/taskForm';

test('returned element is a form', () => {
  const form = taskForm('dance');
  expect(form.tagName).toBe('FORM');
});

test('returned element is not a div', () => {
  const form = taskForm('dance');
  expect(form.tagName).not.toBe('DIV');
});