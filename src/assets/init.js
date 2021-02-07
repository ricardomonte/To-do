import formProject from './formNewProject';
import project from './projectAll';
import clickDisplayTask from './clickDisplayTask';

const init = () => {
  const containerProjects = document.querySelector('#my-projects')
  const containerTasks = document.querySelector('#cont')
  const addProjectBtn = document.querySelector('#addProj')
  project()
  formProject(addProjectBtn)
  clickDisplayTask(containerProjects, containerTasks)
}

export {init as default}
