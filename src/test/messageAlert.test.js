import { existInLocal, emptyForm } from '../assets/messagesAlert';

document.body.innerHTML = '<div id="parent">'
+ '</div>';
const parent = document.querySelector('#parent');

test('message already exist', () => {
  existInLocal(parent);
  expect(parent.textContent).toBe('This task already exist, try again');
});

test('message missing values', () => {
  parent.innerHTML = '';
  emptyForm(parent);
  expect(parent.textContent).toBe('We are missing values to setup your task, try again');
});
