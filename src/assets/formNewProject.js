import displayProject from './displayProject';

const displayNewProject = (element) => {
  element.addEventListener('click', (e) => {
    const input = e.target.previousElementSibling;
    if (e.target.id === 'lol') {
      if (input.value) {
        displayProject(input.value);
        input.value = '';
      }
    }
  });
};

const formProject = (element, myProject) => {
  const containerInput = document.createElement('div');
  const input = document.createElement('INPUT');
  const button = document.createElement('button');
  button.textContent = 'Add project';
  button.id = 'lol';
  input.id = 'project';
  containerInput.id = 'form-addProj';
  containerInput.classList.add('cont-newproject');
  containerInput.append(input);
  containerInput.append(button);
  element.append(containerInput);
  displayNewProject(containerInput, myProject);
};

export { formProject as default };