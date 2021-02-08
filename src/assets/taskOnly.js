const taskClose = (container) => {
  container.classList.remove('visible');
  container.innerHTML = "";
}


const taskClickOnly = (containerTask) => {
  containerTask.addEventListener('click', (e) => {
    if(e.target.id === 'close_task') {
      taskClose(containerTask);
    }
    if(e.target.id === 'edit_task'){
      taskEdit()
    }
    if(e.target.id === 'delete_task') {
      taskDelete()
    }
  })
}

const taskOnlyDisplay = (title, description, date, priority, done) => {
  // const project = document.forms[0];
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

  containerTask.append(taskTitle)
  containerTask.append(taskDesc)
  containerTask.append(taskDate)
  containerTask.append(taskPrio)
  containerTask.append(taskDone)
  containerTask.append(btnDelete)
  containerTask.append(btnEdit)
  containerTask.append(btnClose)

  containerTask.classList.toggle('visible')

  taskClickOnly(containerTask);

}


const taskOnly = (ulTask) => {
  const arrListTask = Array.from(ulTask.children, ({textContent}) => textContent)
  taskOnlyDisplay( ...arrListTask)
}

export { taskOnly as default }