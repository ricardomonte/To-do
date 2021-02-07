
const taskForm = (hiden) => {
  const form = document.createElement('form');
  const labelTitle = document.createElement('label');
  const inputT = document.createElement('input');
  const labelDesc = document.createElement('label');
  const inputDescription = document.createElement('input');
  const labelDueDate = document.createElement('label');
  const inputDueDate = document.createElement('input');
  const labelPrio = document.createElement('label');
  const inputPrio = document.createElement('select');
  const important = document.createElement('option');
  const normal = document.createElement('option');
  const low = document.createElement('option');
  const hidenInput = document.createElement('input');
  const sub = document.createElement('button');
  const divT = document.createElement('div');
  const divD = document.createElement('div');
  const divDa = document.createElement('div');
  const divP = document.createElement('div');

  important.textContent = 'Important';
  normal.textContent = 'Normal';
  low.textContent = 'Low';
  labelPrio.textContent = 'Select the priority';
  inputPrio.append(important);
  inputPrio.append(normal);
  inputPrio.append(low);

  hidenInput.name = 'task';
  inputT.id = 'title';
  inputDescription.id = 'description';
  inputDueDate.id = 'date';
  hidenInput.id = 'hiden';
  inputPrio.id = 'priority';
  labelTitle.textContent = 'What you gonna do?';
  labelDesc.textContent = 'How you gonna do it?';
  labelDueDate.textContent = 'When it must be done?';
  inputDueDate.setAttribute('type', 'date');
  hidenInput.setAttribute('type', 'hidden');
  hidenInput.setAttribute('value', hiden);
  sub.setAttribute('type', 'submit');
  sub.textContent = 'Add new task';

  divT.classList.add('cont-ftitle');
  divD.classList.add('cont-fdesc');
  divDa.classList.add('cont-fdate');
  divP.classList.add('cont-fprio');
  sub.classList.add('cont-fbuton');

  divP.append(labelPrio);
  divP.append(inputPrio);
  divT.append(labelTitle);
  divT.append(inputT);
  divD.append(labelDesc);
  divD.append(inputDescription);
  divDa.append(labelDueDate);
  divDa.append(inputDueDate);
  form.append(divT);
  form.append(divD);
  form.append(divDa);
  form.append(divP)
  form.append(sub);
  form.append(hidenInput);
  return form;
};
export { taskForm as default };