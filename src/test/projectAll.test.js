import projects from '../js/projectAll';
import displayProject from '../js/displayProject';
import getLocalProject from '../js/getLocal';

jest.mock('../../src/js/displayProject');
jest.mock('../../src/js/getLocal');
getLocalProject.mockImplementation(() => ['dance']);

test('getLocalProject called', () => {
  projects();
  expect(getLocalProject).toHaveBeenCalled();
  expect(displayProject).toHaveBeenCalled();
});