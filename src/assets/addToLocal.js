import getLocalProject from './getLocal'

const addToLocalProject = (key, item) => {
  const project = getLocalProject(key);
  const isIn = (element) => element === item;
  if (!project.some(isIn)) {
    project.push(item);
  }
  localStorage.setItem(key, JSON.stringify(project));
};

export { addToLocalProject as default}