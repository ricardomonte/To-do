import taskOnly from './taskOnly';

const taskOnlyClick = (oneTask) => {
  oneTask.addEventListener('click', () => {taskOnly(oneTask.firstElementChild)}) 
}

export { taskOnlyClick as default }