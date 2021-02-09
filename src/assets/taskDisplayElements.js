import taskOnlyClick from './taskOnlyClick';
import priorityCheck from './checkPriority';
import isDone from './isDone';
import defaultList from './defaultList';

const taskDisplayElements = (parent, title, description, date, priority, done) => {
  const container = document.createElement('div');
  const containerContent = document.createElement('div');
  const ulElement = document.createElement('ul');
  const liTitle = document.createElement('li');
  const liDescription = document.createElement('li');
  const liDate = document.createElement('li');
  const liPrio = document.createElement('li');
  const liDone = document.createElement('li');

  const textDone = isDone(done);
  liDone.textContent = textDone;
  liTitle.textContent = title;
  liDescription.textContent = description;
  liDate.textContent = date;
  liPrio.textContent = priority;
  container.classList.add('cont-form');
  containerContent.classList.add('task');
  liPrio.classList.add( priorityCheck(priority) )
  const alalala = title.split(' ').join('-').concat(date)

  ulElement.classList.add('task-list');
  ulElement.id = alalala;
  ulElement.append(liTitle);
  ulElement.append(liDescription);
  ulElement.append(liDate);
  ulElement.append(liPrio);
  ulElement.append(liDone);
  const listDef = defaultList();
  containerContent.append(listDef);
  containerContent.append(ulElement);
  parent.append(containerContent);
  taskOnlyClick(containerContent);
};
export { taskDisplayElements as default };