import getLocalProject from './getLocal';

const taskInLocal = (titleProject) => {
  const result = getLocalProject('task');
  const task = result.filter((item) => {
    if (item.project === titleProject) {
      return true;
    }
    return false;
  });
  return task;
};

export { taskInLocal as default };