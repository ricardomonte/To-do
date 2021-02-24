import projects from '../assets/projectAll';
import displayProject from '../assets/displayProject';
import getLocalProject from '../assets/getLocal';
import { expect, jest, test } from '@jest/globals';

jest.mock('../../src/assets/displayProject');
jest.mock('../../src/assets/getLocal');
getLocalProject.mockImplementation(() => ["dance"]);

test('getLocalProject called', () => {
  projects()
  expect(getLocalProject).toHaveBeenCalled();
  expect(displayProject).toHaveBeenCalled();
})