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
  const containerUl = document.createElement('div')
  ulList.id = 'allTodos';
  ulList.classList.add('task-list__all')
  containerUl.classList.add('list-all__container')
  const textDone = isDone(done);
  liProjName.textContent = project;
  liProjTitle.textContent = title;
  liProjDesc.textContent = description;
  liProjDate.textContent = date;
  liProjDone.textContent = textDone;
  liProjprio.textContent = priority

  liProjprio.classList.add(priorityCheck(priority))
  ulList.append(liProjName);
  ulList.append(liProjTitle);
  ulList.append(liProjDesc);
  ulList.append(liProjDate);
  ulList.append(liProjDone);
  ulList.append(liProjprio);
  containerUl.append(defaultList())
  containerUl.append(ulList)
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