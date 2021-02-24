import { expect, test } from '@jest/globals'
import displayProject from '../assets/displayProject'

test('display project', () => {
  document.body.innerHTML =
    '<div>' +
    '  <span id="my-projects" />' +
    '</div>';
  displayProject('test1');
  expect(document.querySelector("#my-projects").textContent).toBe('test1')
  expect(document.querySelector("#my-projects").textContent).not.toBe('test2')
})