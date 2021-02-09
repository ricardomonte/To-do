const defaultList = () => {
  const ulElement = document.createElement('ul');
  const liTitle = document.createElement('li');
  const liDescription = document.createElement('li');
  const liDate = document.createElement('li');
  const liPrio = document.createElement('li');
  const liDone = document.createElement('li');


  liDone.textContent = 'Status';
  liTitle.textContent = 'Title';
  liDescription.textContent = 'Description';
  liDate.textContent = 'Date';
  liPrio.textContent = 'Priority';

  liDone.classList.add('done-def')
  liTitle.classList.add('title-def')
  liDescription.classList.add('desc-def')
  liDate.classList.add('date-def')
  liPrio.classList.add('prio-def')


  ulElement.classList.add('task-list__default');
  ulElement.append(liTitle);
  ulElement.append(liDescription);
  ulElement.append(liDate);
  ulElement.append(liPrio);
  ulElement.append(liDone);

  return ulElement;
}

export { defaultList as default }
