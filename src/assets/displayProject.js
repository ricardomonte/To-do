import addToLocalProject from './addToLocal'

const checkProject = (name) => {
  if(name.indexOf(' ')) {
    return name.replace(" ", "_")
  } else {
    return name
  }
}


const displayProject = (element) => {
  const containerProject = document.querySelector('#my-projects')
  const projValue = checkProject(element)
  const project = document.createElement('p');
  project.dataset.name = projValue;
  const nameStore = 'projects';
  addToLocalProject(nameStore, projValue);
  project.textContent = element;
  containerProject.append(project);
};

export { displayProject as default };