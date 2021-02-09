const isDone = (done) => {
  if (!done) {
    return `Incomplete`;
  }
  return `Completed`;
};

export { isDone as default }