import taskGenerator from './taskCreatorClass';
import addToLocalProject from './addToLocal';
import taskInLocal from './taskInLocal';
import taskDisplayElements from './taskDisplayElements'

const getValueFormTask = () => {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const date = document.querySelector('#date').value;
  const priority = document.querySelector('#priority').value;
  const project = document.getElementById('hiden').value;

  return [project, title, description, date, priority];
};

// const taskMap = () => {
//   const tasdArr = getLocalProject('task');

// }

const createNewTask = () => {
  const element = document.forms[0];
  const projName = element.id

  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const parent = element.parentElement
    const valuesTask = getValueFormTask();
    const task = taskGenerator(...valuesTask);
    addToLocalProject(...task);
    const projectArr = taskInLocal(projName)
    // parent.append(element)
    projectArr.map((item) => {
      taskDisplayElements(parent, item.title, item.description, item.date, item.priority, item.done);
    });
    // element.reset();
  });
};

export { createNewTask as default}