import taskInLocal from '../js/taskInLocal';
import getLocalProject from '../js/getLocal';

jest.mock('../../src/js/getLocal');

const mock = {
  project: 'dance',
  title: 'cumbia',
  description: 'practice cumbia',
  date: '2021-02-14',
  priority: 'Important',
  done: false,
};

beforeEach(() => {
  getLocalProject.mockClear();
});

test('returned element its an instance of an Array', () => {
  getLocalProject.mockReturnValue([mock]);
  const titleProject = 'dance';
  const result = taskInLocal(titleProject);
  expect(result).toBeInstanceOf(Array);
});

test('returned element is not an instance of String', () => {
  getLocalProject.mockReturnValue([mock]);
  const titleProject = 'dance';
  const result = taskInLocal(titleProject);
  expect(result).not.toBeInstanceOf(String);
});

test('getLocal is called', () => {
  const titleProject = 'dance';
  taskInLocal(titleProject);
  expect(getLocalProject).toHaveBeenCalled();
});
