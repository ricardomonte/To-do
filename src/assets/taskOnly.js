const taskOnlyDisplay = (title, description, date, priority, done) => {
  const project = document.forms[0];
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

  containerTask.id = `_${project}`;
  containerTask.append(taskTitle)
  containerTask.append(taskDesc)
  containerTask.append(taskDate)
  containerTask.append(taskPrio)
  containerTask.append(taskDone)
  containerTask.append(btnDelete)
  containerTask.append(btnEdit)
  containerTask.append(btnClose)

  containerTask.classList.toggle('visible')

}


const taskOnly = (ulTask) => {
  const arrListTask = Array.from(ulTask.children, ({textContent}) => textContent)
  taskOnlyDisplay( ...arrListTask)
}

export { taskOnly as default }