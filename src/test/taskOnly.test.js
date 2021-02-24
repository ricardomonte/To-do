import taskOnly from '../js/taskOnly';

document.body.innerHTML = '<div id="task-inv"></div>'
  + '<div id=test>'
    + '<ul>'
      + '<li>cumbia</li>'
      + '<li>practice cumbia</li>'
      + '<li>2021-02-14</li>'
      + '<li>Important</li>'
      + '<li>Incomplete</li>'
    + '</ul>'
  + '</div>';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || [];
    },
    setItem(key, value) {
      store[key] = JSON.stringify(value);
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const mock = {
  project: 'dance',
  title: 'cumbia',
  description: 'practice cumbia',
  date: '2021-02-14',
  priority: 'Important',
  done: false,
};

const elementContainer = document.querySelector('#test');

test('element with id task-inv will have content', () => {
  localStorageMock.setItem('task', [mock]);
  taskOnly(elementContainer);
  expect(document.querySelector('#task-inv').firstElementChild.className).toBe('only-one__task');
});