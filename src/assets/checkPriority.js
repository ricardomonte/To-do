const priorityCheck = (priority) => {
  if(priority === 'Important'){
    return 'pill-important';
  } else if(priority === 'Normal'){
    return 'pill-normal';
  } else {
    return 'pill-low';
  }
}

export {priorityCheck as default}