import taskDisplayNoTask from './taskDisplayNoTask';
import taskDisplayElements from './taskDisplayElements';
import taskInLocal from './taskInLocal';
import taskForm from './taskForm';
import taskAll from './taskAll';

const clickDisplayTask = (element, sibling) => {
  element.addEventListener('click', (e) => {
    const task = taskInLocal(e.target.textContent);
    if (e.target.dataset.name === 'All') {
      sibling.textContent = '';
      taskAll();
    }
    if (e.target.dataset.name && task.length === 0 && e.target.dataset.name !== 'All') {
      sibling.textContent = '';
      const form = taskForm(e.target.textContent);
      sibling.append(form);
      taskDisplayNoTask(sibling, e.target.textContent);
    }
    if (e.target.dataset.name && task.length !== 0 && e.target.dataset.name !== 'All') {
      sibling.textContent = '';
      const form = taskForm(e.target.textContent);
      sibling.append(form);
      task.forEach((item) => {
        taskDisplayElements(sibling, item.title, item.description,
          item.date, item.priority, item.done);
      });
    }
  });
};

export { clickDisplayTask as default };