import taskDisplayElements from '../assets/taskDisplayElements';
import taskOnlyClick from '../assets/taskOnlyClick';

jest.mock('../../src/assets/taskOnlyClick');

const title = 'cumbia';
const description = 'practice cumbia';
const date = '2021-02-14';
const priority = 'Important';
const done = false;

document.body.innerHTML = '<div id="cont"></div>';

const elementParent = document.querySelector('#cont');
taskDisplayElements(elementParent, title, description, date, priority, done);

test('append div class "task" element in div with id "cont"', () => {
  const elementClassName = document.querySelector('#cont').firstElementChild.className;
  expect(elementClassName).toBe('task');
  expect(elementClassName).not.toBe('task-list');
});

test('element include in textContent "cumbia"', () => {
  const elementIn = document.querySelector('#cont').textContent.includes('cumbia');
  const elementNotIn = document.querySelector('#cont').textContent.includes('rock');
  expect(elementIn).toBeTruthy();
  expect(elementNotIn).toBeFalsy();
});

test('taskOnlyClick has been call', () => {
  expect(taskOnlyClick).toHaveBeenCalled();
});