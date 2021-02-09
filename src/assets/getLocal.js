const getLocalProject = (key) => {
  let project;
  if (localStorage.getItem(key) === null) {
    project = [];
  } else {
    project = JSON.parse(localStorage.getItem(key));
  }
  return project;
};

export { getLocalProject as default };