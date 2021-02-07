import displayProject from './displayProject';
import getLocalProject from './getLocal'

const projects = () => {
  const nameStore = 'projects';
  const proj = getLocalProject(nameStore);
  proj.map((item) => displayProject(item));
};

export { projects as default };