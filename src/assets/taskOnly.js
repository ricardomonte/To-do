import getLocalProject from './getLocal';
import priorityCheck from './checkPriority';


const taskClose = (container) => {
  container.classList.remove('visible');
  container.innerHTML = "";
}

const changeUlTask = (id, newValues, container) => {
  const ulElement = document.querySelector(`#${id}`);
  const liTitle = document.createElement('li');
  const liDescription = document.createElement('li');
  const liDate = document.createElement('li');
  const liPrio = document.createElement('li');
  const liDone = document.createElement('li');

  liTitle.textContent = newValues[0];
  liDescription.textContent = newValues[1];
  liDate.textContent = newValues[2];
  liPrio.textContent = newValues[3];
  liDone.textContent = newValues[4];

  liPrio.classList.add(priorityCheck(newValues[3]))
  ulElement.innerHTML = '';
  ulElement.append(liTitle);
  ulElement.append(liDescription);
  ulElement.append(liDate);
  ulElement.append(liPrio);
  ulElement.append(liDone);

  taskClose(container)
}


const changeInLocal = (oldContent, container, newValues) => {
  const allTask = getLocalProject('task');
  const proj = oldContent[0];
  const title = oldContent[1];
  const desc = oldContent[2];
  const date = oldContent[3]
  const titlen = newValues[0];
  const descn = newValues[1];
  const daten = newValues[2];
  const prion = newValues[3];
  const donen = newValues[4];
  const lookForId = title.split(' ').join('-').concat(date)

  allTask.forEach((item) => {
    if(item.project === proj && item.title === title && item.description === desc){
      item.title = titlen;
      item.description = descn;
      item.date = daten;
      item.priority = prion;
      item.done = donen === 'Completed'? true : false
    }
  })

  localStorage.setItem('task', JSON.stringify(allTask))
  changeUlTask(lookForId, newValues, container)
}

const valuesForm = () => {
  const title = document.querySelector('#taskOnlyTitle').value;
  const desc = document.querySelector('#taskOnlyDesc').value;
  const date = document.querySelector('#taskOnlyDate').value;
  const prio = document.querySelector('#taskOnlyPrio').value;
  const done = document.querySelector('#taskOnlyDOne').value;

  return [ title, desc, date, prio, done ]
}

const submitForm = (form, oldContent, container) => {
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    const newValues = valuesForm()
    changeInLocal(oldContent, container, newValues);

  })
}

const taskEditAddToLocal = (container) => {
  const project = document.forms[0].id;
  const arrElementsTask = Array.from(container.children, ({textContent}) => textContent)
    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');
  arrElementsTask.unshift(project);
  return arrElementsTask

}

const taskEdit = (arr, container) => {
  const oldValues = arr 
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

  
  inputT.value = oldValues[1];
  inputDescription.value = oldValues[2];
  inputDueDate.value = oldValues[3];

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
  form.append(inputDescription)
  form.append(labelDueDate);
  form.append(inputDueDate)
  form.append(labelPrio);
  form.append(inputPrio)
  form.append(labelDone);
  form.append(selectDone)
  form.append(sub);

  container.innerHTML = '';
  container.append(form)
  submitForm(form, oldValues, container)
}

const reloadElement = (arrElement) => {
  const task = document.querySelectorAll('div.task');
  task.forEach((item) => { 
    if(item.innerText.includes(arrElement[0]) && item.innerText.includes(arrElement[1])){
      item.remove()
    }
  });

};

const taskDelete = (container) => {
  const project = document.forms[0].id;
  const arrElementsTask = Array.from(container.children, ({textContent}) => textContent)
    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');
  const title = arrElementsTask[0];
  const desc = arrElementsTask[1];
  const date = arrElementsTask[2];
  const prio = arrElementsTask[3];

  const allTask = getLocalProject('task');

  const allTaskWout = allTask.filter((item) => {
    if (item.project === project && item.title === title && item.description === desc && item.date === date && item.priority === prio) {
      return false;
    }
    return true;
  });

  localStorage.setItem('task', JSON.stringify(allTaskWout))

  taskClose(container)
  reloadElement(arrElementsTask)
}

const taskClickEdit = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    const arrElement = taskEditAddToLocal(containerTask)
    taskEdit(arrElement, containerTask)
  })
}

const taskClickDelete = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    taskDelete(containerTask)    
  })
}

const taskClickClose = (btn, containerTask) => {
  btn.addEventListener('click', () => {
    taskClose(containerTask);
  })
}

const taskOnlyDisplay = (title, description, date, priority, done) => {
  const containerTask = document.querySelector('#task-inv');
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
  btnEdit.textContent = "Edit";
  btnClose.textContent = "Close";

  btnClose.id = 'close_task';
  btnEdit.id = 'edit_task';
  btnDelete.id = 'delete_task';
  taskPrio.classList.add(priorityCheck(priority))
  containerTask.append(taskTitle)
  containerTask.append(taskDesc)
  containerTask.append(taskDate)
  containerTask.append(taskPrio)
  containerTask.append(taskDone)
  containerTask.append(btnDelete)
  containerTask.append(btnEdit)
  containerTask.append(btnClose)

  containerTask.classList.toggle('visible')

  taskClickDelete(btnDelete, containerTask);
  taskClickEdit(btnEdit, containerTask);
  taskClickClose(btnClose, containerTask);
}


const taskOnly = (ultask) => {
  const arrListTask = Array.from(ultask.children, ({textContent}) => textContent)
  taskOnlyDisplay(...arrListTask)
}

export { taskOnly as default }