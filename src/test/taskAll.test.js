import taskAll from '../assets/taskAll';
import { expect, test } from '@jest/globals';

const localStorageMock = (function() {
  const store = {};

  return {
      getItem: function(key) {
          return store[key] || [];
      },
      setItem: function(key, value) {
          store[key] = JSON.stringify(value);
      },
      clear: function() {
          store = {};
      }
  };

})();

document.body.innerHTML =
'<div>' +
'  <div id="my-projects"></div>' +
'  <div id="cont"></div>' +
'  <div id="addProj"></div>'
'</div>';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

const mock = {
  project: 'dance',
  title: 'cumbia',
  description: 'practice cumbia',
  date: '2021-02-14',
  priority: 'Important',
  done: false,
};

localStorageMock.setItem('task', [mock])

taskAll()

test('append div element in div with id "cont"', () => {
  const elementTag = document.querySelector('#cont').firstElementChild.tagName
  expect(elementTag).toBe('DIV')
  expect(elementTag).not.toBe('UL')
})

test('class first element child "list-all__container"', () => {
  const elementName = document.querySelector('#cont').firstElementChild.className
  expect(elementName).toBe('list-all__container')
  expect(elementName).not.toBe('proj-all')
})
