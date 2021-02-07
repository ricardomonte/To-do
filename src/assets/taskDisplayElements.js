import taskForm from './taskForm';
import createNewTask from './taskCreateNew'
// import { createNewTask, markAsDone, getOneTask } from './eventsClick';

// const checkForExist = (form, value, container, containerTask, brother, containerContent, ulElement) => {
//   const check = document.querySelector('#cont');
//   const formCheck = document.querySelector(`#${value}`);
//   if (check && formCheck) {
//     containerContent.append(ulElement);

//     check.append(containerContent);
//   } else {
//     containerContent.append(ulElement);
//     container.append(form);
//     containerTask.append(container);
//     containerTask.append(containerContent);
//     brother.insertAdjacentElement('afterend', containerTask);
//   }
// };

// const addClassInDoneElement = (lititle, lidesc, lidate, lidone, title) => {
//   if (lidone.textContent === `Task ${title} is done`) {
//     lititle.classList.add('task-done');
//     lidesc.classList.add('task-done');
//     lidate.classList.add('task-done');
//   }
// };

const isDone = (done, title) => {
  if (!done) {
    return `Mark ${title} as done`;
  }
  return `Task ${title} is done`;
};


const taskDisplayElements = (parent, title, description, date, priority, done) => {
  // const containerTask = document.createElement('div');
  const container = document.createElement('div');
  const containerContent = document.createElement('div');

  // const form = taskForm(value);
  // containerTask.id = 'cont';
  // form.id = value;
  const ulElement = document.createElement('ul');
  const liTitle = document.createElement('li');
  const liDescription = document.createElement('li');
  const liDate = document.createElement('li');
  const liPrio = document.createElement('li');
  const liDone = document.createElement('li');

  const textDone = isDone(done, title);
  liDone.textContent = textDone;
  liTitle.textContent = title;
  liDescription.textContent = description;
  liDate.textContent = date;
  liPrio.textContent = priority;
  // addClassInDoneElement(liTitle, liDescription, liDate, liDone, title);
  container.classList.add('cont-form');
  containerContent.classList.add('task');


  ulElement.classList.add('task-list');
  ulElement.append(liTitle);
  ulElement.append(liDescription);
  ulElement.append(liDate);
  ulElement.append(liPrio);
  ulElement.append(liDone);

  containerContent.append(ulElement);
  // container.append(form);
  // parent.append(container);
  parent.append(containerContent);


  // checkForExist(form, value, container, containerTask, brother, containerContent, ulElement);
  // createNewTask(form);
  // markAsDone(liDone);
  // getOneTask(containerContent, liTitle);
};
export { taskDisplayElements as default };