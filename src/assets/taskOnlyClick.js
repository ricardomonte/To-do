import taskOnly from './taskOnly';

const taskOnlyClick = (oneTask) => {
  oneTask.addEventListener('click', () => {taskOnly(oneTask.lastElementChild)}) 
}

export { taskOnlyClick as default }