import addToLocalProject from './addToLocal';


const displayProject = (element) => {
  const containerProject = document.querySelector('#my-projects');
  const project = document.createElement('p');
  project.dataset.name = element;
  const nameStore = 'projects';
  addToLocalProject(nameStore, element);
  project.textContent = element;
  containerProject.append(project);
};

export { displayProject as default };