export const existInLocal = (parent) => {
  const allreadyIn = document.createElement('span');
  allreadyIn.textContent = 'This task already exist, try again';
  allreadyIn.id = 'task_exist';
  parent.append(allreadyIn);
};

export const emptyForm = (parent) => {
  const empForm = document.createElement('span');
  empForm.textContent = 'We are missing values to setup your task, try again';
  empForm.id = 'task_empty';
  parent.append(empForm);
};