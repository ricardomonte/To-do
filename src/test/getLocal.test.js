import getLocalProject from '../js/getLocal';

test('return an array', () => {
  expect(getLocalProject('project')).toBeInstanceOf(Array);
});