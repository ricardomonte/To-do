import taskGenerator from '../js/taskCreatorClass';

const project = 'dance';
const title = 'cumbia';
const description = 'practice cumbia';
const date = '2021-02-14';
const priority = 'Important';
const done = false;

const mock = {
  project: 'dance',
  title: 'cumbia',
  description: 'practice cumbia',
  date: '2021-02-14',
  priority: 'Important',
  done: false,
};

test('return an array with length 2', () => {
  expect(taskGenerator(project, title, description, date, priority, done).length).toBe(2);
});

test('second element in array is an Object', () => {
  expect(taskGenerator(project, title, description, date, priority, done)[1]).toEqual(mock);
});