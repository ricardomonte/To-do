import getLocalProject from './getLocal';
import priorityCheck from './checkPriority';


const taskClose = (container) => {
  container.classList.remove('visible');
  container.innerHTML = '';
};

const changeUlTask = (id, newValues, container) => {
  const ulElement = document.querySelector(`#${id}`);
  const liTitle = document.createElement('li');
  const liDescription = document.createElement('li');
  const liDate = document.createElement('li');
  const liPrio = document.createElement('li');
  const liDone = document.createElement('li');

  [liTitle.textContent, liDescription.textContent,
    liDate.textContent, liPrio.textContent, liDone.textContent] = newValues;

  liPrio.classList.add(priorityCheck(newValues[3]));

  liTitle.classList.add('title-task__proj');
  liDescription.classList.add('desc-task__proj');
  liDate.classList.add('date-task__proj');
  liPrio.classList.add('prio-task__proj');
  liDone.classList.add('done-task__proj');

  ulElement.innerHTML = '';
  ulElement.append(liTitle);
  ulElement.append(liDescription);
  ulElement.append(liDate);
  ulElement.append(liPrio);
  ulElement.append(liDone);

  taskClose(container);
};


const changeInLocal = (oldContent, container, newValues) => {
  const allTask = getLocalProject('task');
  const proj = oldContent[0];
  const title = oldContent[1];
  const desc = oldContent[2];
  const date = oldContent[3];
  const titlen = newValues[0];
  const descn = newValues[1];
  const daten = newValues[2];
  const prion = newValues[3];
  const donen = newValues[4];
  const lookForId = title.split(' ').join('-').concat(date);

  allTask.forEach((item) => {
    if (item.project === proj && item.title === title && item.description === desc) {
      item.title = titlen;
      item.description = descn;
      item.date = daten;
      item.priority = prion;
      item.done = donen === 'Completed';
    }
  });

  localStorage.setItem('task', JSON.stringify(allTask));
  changeUlTask(lookForId, newValues, container);
};

const valuesForm = () => {
  const title = document.querySelector('#taskOnlyTitle').value;
  const desc = document.querySelector('#taskOnlyDesc').value;
  const date = document.querySelector('#taskOnlyDate').value;
  const prio = document.querySelector('#taskOnlyPrio').value;
  const done = document.querySelector('#taskOnlyDOne').value;

  return [title, desc, date, prio, done];
};

const submitForm = (form, oldContent, container) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newValues = valuesForm();
    changeInLocal(oldContent, container, newValues);
  });
};

const taskEditAddToLocal = (container) => {
  const project = document.forms[0].id;
  const arrElementsTask = Array.from(container.children, ({ textContent }) => textContent)
    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');
  arrElementsTask.unshift(project);
  return arrElementsTask;
};

const taskEdit = (arr, container) => {
  const oldValues = arr;
  let someOld = [];
  const form = document.createElement('form');
  const labelTitle = document.createElement('label');
  const inputT = document.createElement('input');
  const labelDesc = document.createElement('label');
  const inputDescription = document.createElement('input');
  const labelDueDate = document.createElement('label');
  const inputDueDate = document.createElement('input');
  const labelPrio = document.createElement('label');
  const inputPrio = document.createElement('select');
  const important = document.createElement('option');
  const normal = document.createElement('option');
  const low = document.createElement('option');
  const labelDone = document.createElement('label');
  const selectDone = document.createElement('select');
  const optionNotDone = document.createElement('option');
  const optionDone = document.createElement('option');
  const sub = document.createElement('button');

  important.textContent = 'Important';
  normal.textContent = 'Normal';
  low.textContent = 'Low';
  labelPrio.textContent = 'Select the priority';
  inputPrio.append(important);
  inputPrio.append(normal);
  inputPrio.append(low);

  optionDone.textContent = 'Completed';
  optionNotDone.textContent = 'Incomplete';
  labelDone.textContent = 'if its Done';
  selectDone.append(optionDone);
  selectDone.append(optionNotDone);

  someOld = [oldValues[1], oldValues[2], oldValues[3]];

  [inputT.value, inputDescription.value, inputDueDate.value] = someOld;

  // inputT.value = oldValues[1];
  // inputDescription.value = oldValues[2];
  // inputDueDate.value = oldValues[3];

  inputT.id = 'taskOnlyTitle';
  inputDescription.id = 'taskOnlyDesc';
  inputDueDate.id = 'taskOnlyDate';
  inputPrio.id = 'taskOnlyPrio';
  selectDone.id = 'taskOnlyDOne';

  labelTitle.textContent = 'What you gonna do?';
  labelDesc.textContent = 'How you gonna do it?';
  labelDueDate.textContent = 'When it must be done?';
  inputDueDate.setAttribute('type', 'date');


  sub.setAttribute('type', 'submit');
  sub.textContent = 'Update task';


  form.append(labelTitle);
  form.append(inputT);
  form.append(labelDesc);
  form.append(inputDescription);
  form.append(labelDueDate);
  form.append(inputDueDate);
  form.append(labelPrio);
  form.append(inputPrio);
  form.append(labelDone);
  form.append(selectDone);
  form.append(sub);

  container.innerHTML = '';
  container.append(form);
  submitForm(form, oldValues, container);
};

const reloadElement = (arrElement) => {
  const task = document.querySelectorAll('div.task');
  task.forEach((item) => {
    if (item.innerText.includes(arrElement[0]) && item.innerText.includes(arrElement[1])) {
      item.remove();
    }
  });
};

const taskDelete = (container, parent) => {
  const project = document.forms[0].id;
  const arrElementsTask = Array.from(container.children, ({ textContent }) => textContent)
    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');
  const title = arrElementsTask[0];
  const desc = arrElementsTask[1];
  const date = arrElementsTask[2];
  const prio = arrElementsTask[3];

  const allTask = getLocalProject('task');

  const allTaskWout = allTask.filter((item) => {
    if (item.project === project && item.title === title
      && item.description === desc && item.date === date && item.priority === prio) {
      return false;
    }
    return true;
  });

  localStorage.setItem('task', JSON.stringify(allTaskWout));

  taskClose(parent);
  reloadElement(arrElementsTask);
};

const taskClickEdit = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    const parent = containerTask;
    const arrElement = taskEditAddToLocal(containerTask.firstElementChild, parent);
    taskEdit(arrElement, parent);
  });
};

const taskClickDelete = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    const parent = containerTask;
    taskDelete(containerTask.firstElementChild, parent);
  });
};

const taskClickClose = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    taskClose(containerTask);
  });
};

const taskOnlyDisplay = (title, description, date, priority, done) => {
  const containerTask = document.querySelector('#task-inv');
  const containerAll = document.createElement('div');
  const taskTitle = document.createElement('p');
  const taskDesc = document.createElement('p');
  const taskDate = document.createElement('p');
  const taskPrio = document.createElement('p');
  const taskDone = document.createElement('p');
  const btnDelete = document.createElement('button');
  const btnEdit = document.createElement('button');
  const btnClose = document.createElement('button');

  taskTitle.textContent = title;
  taskDesc.textContent = description;
  taskDate.textContent = date;
  taskPrio.textContent = priority;
  taskDone.textContent = done;
  btnDelete.textContent = 'Delete this task';
  btnEdit.textContent = 'Edit';
  btnClose.textContent = 'Close';

  taskTitle.classList.add('title-task__only');
  taskDesc.classList.add('desc-task__only');
  taskDate.classList.add('date-task__only');
  taskPrio.classList.add('prio-task__only');
  taskDone.classList.add('done-task__only');


  btnClose.id = 'close_task';
  btnEdit.id = 'edit_task';
  btnDelete.id = 'delete_task';
  taskPrio.classList.add(priorityCheck(priority));
  containerAll.append(taskTitle);
  containerAll.append(taskDesc);
  containerAll.append(taskDate);
  containerAll.append(taskPrio);
  containerAll.append(taskDone);
  containerAll.append(btnDelete);
  containerAll.append(btnEdit);
  containerAll.append(btnClose);

  containerAll.classList.add('only-one__task');
  containerTask.append(containerAll);
  containerTask.classList.toggle('visible');

  taskClickDelete(btnDelete, containerTask);
  taskClickEdit(btnEdit, containerTask);
  taskClickClose(btnClose, containerTask);
};


const taskOnly = (ultask) => {
  const arrListTask = Array.from(ultask.children, ({ textContent }) => textContent);
  taskOnlyDisplay(...arrListTask);
};

export { taskOnly as default };