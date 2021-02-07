class TaskCreator {
  constructor(project, title, description, date, priority) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority
    this.done = false;
  }
}

const taskGenerator = (project, title, description, date, priority) => {
  const theTask = new TaskCreator(project, title, description, date, priority);
  const nameStore = 'task';
  return [nameStore, theTask];
};

export { taskGenerator as default };