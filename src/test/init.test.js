import init from '../assets/init';
import formProject from '../assets/formNewProject';
import project from '../assets/projectAll';
import clickDisplayTask from '../assets/clickDisplayTask';
import taskAll from '../assets/taskAll';
import taskProjectDefault from '../assets/taskProjectDefault';
import { jest, test } from '@jest/globals';

jest.mock('../../src/assets/projectAll' )
jest.mock('../../src/assets/clickDisplayTask' )
jest.mock('../../src/assets/taskAll' )
jest.mock('../../src/assets/taskProjectDefault' )
jest.mock('../../src/assets/formNewProject' )


beforeEach(() => {
  project.mockClear();
  taskProjectDefault.mockClear();
  taskAll.mockClear();
  formProject.mockClear();
  clickDisplayTask.mockClear();
})

test('if methods are call', () =>{
  document.body.innerHTML =
    '<div>' +
    '  <div id="my-projects"></div>' +
    '  <div id="cont"></div>' +
    '  <div id="addProj"></div>'
    '</div>';
  init()
  expect(taskProjectDefault).toHaveBeenCalled()
  expect(project).toHaveBeenCalled()
  expect(taskAll).toHaveBeenCalled()
  expect(formProject).toHaveBeenCalled()
  expect(clickDisplayTask).toHaveBeenCalled()
})