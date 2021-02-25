const priorityCheck = (priority) => {
  if (priority === 'Important') {
    return 'pill-important';
  } if (priority === 'Normal') {
    return 'pill-normal';
  }
  return 'pill-low';
};

export { priorityCheck as default };