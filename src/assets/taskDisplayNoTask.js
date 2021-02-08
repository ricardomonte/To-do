
const taskDisplayNoTask = (taskContainer, value) => {
  const container = document.createElement('div');
  const containerContent = document.createElement('div');
  const notask = document.createElement('h1');
  container.classList.add('cont-form');
  notask.id = 'notask';
  notask.textContent = `Your project ${value} dont have tasks`;
  containerContent.classList.add('task');
  containerContent.append(notask);
  taskContainer.append(containerContent);
};

export { taskDisplayNoTask as default }