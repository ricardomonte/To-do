import taskForm from './taskForm'
import createNewTask from './taskCreateNew'
const taskDisplayNoTask = (taskContainer, value) => {
  const container = document.createElement('div');
  const containerContent = document.createElement('div');
  const notask = document.createElement('h1');
  const form = taskForm(value);
  container.classList.add('cont-form');
  form.id = value;
  notask.id = 'notask';
  notask.textContent = `Your project ${value} dont have tasks`;
  containerContent.classList.add('task');
  containerContent.append(notask);
  container.append(form);
  taskContainer.append(container);
  taskContainer.append(containerContent);
  createNewTask()
};

export { taskDisplayNoTask as default }