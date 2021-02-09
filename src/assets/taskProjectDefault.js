import addToLocalProject from './addToLocal';
import getLocalProject from './getLocal'
import taskGenerator from './taskCreatorClass';

const checkLocal = (task1, task2) => {
  const result = getLocalProject('task')
  if(result.length === 0 ){
    addToLocalProject(...task1);
    addToLocalProject(...task2);
  }
}

const taskProjectDefault = () => {
  const all = 'All';
  const project1 = 'Learn JavaScript';
  const project2 = 'Learn UI Design';
  const title1 = 'Study ES6';
  const desc1 = 'I will read documentation';
  const date1 = '2021-02-13';
  const prio1 = 'Important';
  const title2 = 'Study color Theory';
  const desc2 = 'I will take a course in Udemy';
  const date2 = '2021-02-14';
  const prio2 = 'Normal';

  const task1 = taskGenerator(project1, title1, desc1, date1, prio1);
  const task2 = taskGenerator(project2, title2, desc2, date2, prio2);

  addToLocalProject('projects', all);
  addToLocalProject('projects', project1);
  addToLocalProject('projects', project2);

  checkLocal(task1, task2);
}

export { taskProjectDefault as default }