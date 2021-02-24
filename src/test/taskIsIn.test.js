import taskIsIn from '../js/taskIsIn';
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

test('returned element is an instance of an Array', () => {
  getLocalProject.mockReturnValue([mock]);
  const arr = ['fly', 'winds', 'fly with winds'];
  const result = taskIsIn(arr);
  expect(result).toBeInstanceOf(Array);
});

test('returned element is not an instance of an String', () => {
  getLocalProject.mockReturnValue([mock]);
  const arr = ['run', '10k', 'with my legs'];
  const result = taskIsIn(arr);
  expect(result).not.toBeInstanceOf(String);
});

test('getLocalProject is called', () => {
  const arr = ['fly', 'winds', 'fly with winds'];
  taskIsIn(arr);
  expect(getLocalProject).toHaveBeenCalled();
});

test('element inside of the array returned its an object', () => {
  const arr = ['dance', 'cumbia', 'practice cumbia'];
  const result = taskIsIn(arr);
  expect(result[0]).toBeInstanceOf(Object);
});