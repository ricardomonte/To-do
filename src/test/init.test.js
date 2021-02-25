import init from '../js/init';
import formProject from '../js/formNewProject';
import project from '../js/projectAll';
import clickDisplayTask from '../js/clickDisplayTask';
import taskAll from '../js/taskAll';
import taskProjectDefault from '../js/taskProjectDefault';

jest.mock('../../src/js/projectAll');
jest.mock('../../src/js/clickDisplayTask');
jest.mock('../../src/js/taskAll');
jest.mock('../../src/js/taskProjectDefault');
jest.mock('../../src/js/formNewProject');


beforeEach(() => {
  project.mockClear();
  taskProjectDefault.mockClear();
  taskAll.mockClear();
  formProject.mockClear();
  clickDisplayTask.mockClear();
});

document.body.innerHTML = '<div>'
  + '  <div id="my-projects"></div>'
  + '  <div id="cont"></div>'
  + '  <div id="addProj"></div>'
  + '</div>';

test('if methods are call', () => {
  init();
  expect(taskProjectDefault).toHaveBeenCalled();
  expect(project).toHaveBeenCalled();
  expect(taskAll).toHaveBeenCalled();
  expect(formProject).toHaveBeenCalled();
  expect(clickDisplayTask).toHaveBeenCalled();
});