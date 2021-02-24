import taskDisplayNoTask from '../assets/taskDisplayNoTask';

document.body.innerHTML = '<div id=cont></div>';

const parentElement = document.querySelector('#cont');
const value = 'dance';
taskDisplayNoTask(parentElement, value);
test('child element to be a div', () => {
  const child = document.querySelector('#cont').firstElementChild.tagName;
  expect(child).toBe('DIV');
});

test('element to have text "Your project dance dont have tasks"', () => {
  const element = document.querySelector('#notask').textContent;
  expect(element).toBe('Your project dance dont have tasks');
});