

const appending = (project, title, description, date, priority, done) => {
  const container = document.querySelector('#cont');
  const ulList = document.createElement('ul');
  const liProjName = document.createElement('li');
  const liProjTitle = document.createElement('li');
  const liProjDesc = document.createElement('li');
  const liProjDate = document.createElement('li');
  const liProjDone = document.createElement('li');
  const liProjprio = document.createElement('li');

  ulList.id = 'allTodos';
  ulList.classList.add('task-list__all')


  liProjName.textContent = project;
  liProjTitle.textContent = title;
  liProjDesc.textContent = description;
  liProjDate.textContent = date;
  liProjDone.textContent = done;
  liProjprio.textContent = priority
  ulList.append(liProjName);
  ulList.append(liProjTitle);
  ulList.append(liProjDesc);
  ulList.append(liProjDate);
  ulList.append(liProjDone);
  ulList.append(liProjprio);
  container.append(ulList);
};

const displayAll = (alltasks) => {
  alltasks.map((item) => {
    appending(item.project, item.title, item.description, item.date, item.priority, item.done);
  });
};


const taskAll = () => {
  const result = JSON.parse(localStorage.getItem('task'));
  displayAll(result);
};

export { taskAll as default };