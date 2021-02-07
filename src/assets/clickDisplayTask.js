import taskDisplayNoTask from './taskDisplayNoTask';
import taskDisplayElements from './taskDisplayElements';
import taskInLocal from './taskInLocal';
import taskForm from  './taskForm';

const clickDisplayTask = (element, sibling) => {
  element.addEventListener('click', (e) => {
    const task = taskInLocal(e.target.textContent);
    console.log(task);
    console.log(element)
    console.log(e.target.dataset)
    if (e.target.dataset.name && task.length === 0) {
      console.log('task empty')
      sibling.textContent = "";
      taskDisplayNoTask(sibling, e.target.textContent);
    }
    if(e.target.dataset.name && task.length !== 0 ){
      sibling.textContent = "";
      console.log(task)
      const form = taskForm(e.target.textContent)
      form.id = e.target.textContent
      sibling.append(form)
      // task.map((item) => {
      //   taskDisplayElements(sibling, item.title, item.description, item.date, item.priority, item.done);
      // });
      // taskDisplayNoTask(element, e.target.textContent);
    }
  });
};

export { clickDisplayTask as default }