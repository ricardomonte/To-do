import getLocalProject from './getLocal';

const taskIsIn = (arr) => {
  let project = '';
  let title = '';
  let desc = '';

  [project, title, desc] = [arr[0], arr[1], arr[2]];
  const allLocals = getLocalProject('task');
  const filtered = allLocals.filter((item) => item.project === project
    && item.title === title && item.description === desc);
  return filtered;
};

export { taskIsIn as default };