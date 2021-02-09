import priorityCheck from './checkPriority';
import isDone from './isDone';
import defaultList from './defaultList';

const appending = (project, title, description, date, priority, done) => {
  const container = document.querySelector('#cont');
  const ulList = document.createElement('ul');
  const liProjName = document.createElement('li');
  const liProjTitle = document.createElement('li');
  const liProjDesc = document.createElement('li');
  const liProjDate = document.createElement('li');
  const liProjDone = document.createElement('li');
  const liProjprio = document.createElement('li');
  const containerUl = document.createElement('div');
  const defaultProject = document.createElement('li');
  const dtList = defaultList();
  ulList.id = 'allTodos';
  ulList.classList.add('task-list__all');
  containerUl.classList.add('list-all__container');
  const textDone = isDone(done);
  liProjName.textContent = project;
  liProjTitle.textContent = title;
  liProjDesc.textContent = description;
  liProjDate.textContent = date;
  liProjDone.textContent = textDone;
  liProjprio.textContent = priority;
  defaultProject.textContent = 'Project';

  defaultProject.classList.add('proj-def');

  liProjName.classList.add('proj-all');
  liProjTitle.classList.add('title-all');
  liProjDesc.classList.add('desc-all');
  liProjDate.classList.add('date-all');
  liProjDone.classList.add('prio-all');
  liProjprio.classList.add('done-all');
  liProjprio.classList.add(priorityCheck(priority));
  ulList.append(liProjName);
  ulList.append(liProjTitle);
  ulList.append(liProjDesc);
  ulList.append(liProjDate);
  ulList.append(liProjDone);
  ulList.append(liProjprio);
  dtList.prepend(defaultProject);
  containerUl.append(dtList);
  containerUl.append(ulList);
  container.append(containerUl);
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
