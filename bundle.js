/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/main.scss?");

/***/ }),

/***/ "./src/assets/addToLocal.js":
/*!**********************************!*\
  !*** ./src/assets/addToLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addToLocalProject)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nconst addToLocalProject = (key, item) => {\n  const project = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)(key);\n  const isIn = (element) => element === item;\n  if (!project.some(isIn)) {\n    project.push(item);\n  }\n  localStorage.setItem(key, JSON.stringify(project));\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/addToLocal.js?");

/***/ }),

/***/ "./src/assets/checkPriority.js":
/*!*************************************!*\
  !*** ./src/assets/checkPriority.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ priorityCheck)\n/* harmony export */ });\nconst priorityCheck = (priority) => {\n  if (priority === 'Important') {\n    return 'pill-important';\n  } if (priority === 'Normal') {\n    return 'pill-normal';\n  }\n  return 'pill-low';\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/checkPriority.js?");

/***/ }),

/***/ "./src/assets/clickDisplayTask.js":
/*!****************************************!*\
  !*** ./src/assets/clickDisplayTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickDisplayTask)\n/* harmony export */ });\n/* harmony import */ var _taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDisplayNoTask */ \"./src/assets/taskDisplayNoTask.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ \"./src/assets/taskForm.js\");\n/* harmony import */ var _taskAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskAll */ \"./src/assets/taskAll.js\");\n\n\n\n\n\n\nconst clickDisplayTask = (element, sibling) => {\n  element.addEventListener('click', (e) => {\n    const task = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(e.target.textContent);\n    if (e.target.dataset.name === 'All') {\n      sibling.textContent = '';\n      (0,_taskAll__WEBPACK_IMPORTED_MODULE_4__.default)();\n    }\n    if (e.target.dataset.name && task.length === 0 && e.target.dataset.name !== 'All') {\n      sibling.textContent = '';\n      const form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.default)(e.target.textContent);\n      sibling.append(form);\n      (0,_taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__.default)(sibling, e.target.textContent);\n    }\n    if (e.target.dataset.name && task.length !== 0 && e.target.dataset.name !== 'All') {\n      sibling.textContent = '';\n      const form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.default)(e.target.textContent);\n      sibling.append(form);\n      task.forEach((item) => {\n        (0,_taskDisplayElements__WEBPACK_IMPORTED_MODULE_1__.default)(sibling, item.title, item.description,\n          item.date, item.priority, item.done);\n      });\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/clickDisplayTask.js?");

/***/ }),

/***/ "./src/assets/defaultList.js":
/*!***********************************!*\
  !*** ./src/assets/defaultList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultList)\n/* harmony export */ });\nconst defaultList = () => {\n  const ulElement = document.createElement('ul');\n  const liTitle = document.createElement('li');\n  const liDescription = document.createElement('li');\n  const liDate = document.createElement('li');\n  const liPrio = document.createElement('li');\n  const liDone = document.createElement('li');\n\n\n  liDone.textContent = 'Status';\n  liTitle.textContent = 'Title';\n  liDescription.textContent = 'Description';\n  liDate.textContent = 'Date';\n  liPrio.textContent = 'Priority';\n\n  liDone.classList.add('done-def');\n  liTitle.classList.add('title-def');\n  liDescription.classList.add('desc-def');\n  liDate.classList.add('date-def');\n  liPrio.classList.add('prio-def');\n\n\n  ulElement.classList.add('task-list__default');\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n\n  return ulElement;\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/assets/defaultList.js?");

/***/ }),

/***/ "./src/assets/displayProject.js":
/*!**************************************!*\
  !*** ./src/assets/displayProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n\n\n\nconst displayProject = (element) => {\n  const containerProject = document.querySelector('#my-projects');\n  const project = document.createElement('p');\n  project.dataset.name = element;\n  const nameStore = 'projects';\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)(nameStore, element);\n  project.textContent = element;\n  containerProject.append(project);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/displayProject.js?");

/***/ }),

/***/ "./src/assets/formNewProject.js":
/*!**************************************!*\
  !*** ./src/assets/formNewProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formProject)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n\n\nconst displayNewProject = (element) => {\n  element.addEventListener('click', (e) => {\n    const input = e.target.previousElementSibling;\n    if (e.target.id === 'lol') {\n      if (input.value) {\n        (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\n        input.value = '';\n      }\n    }\n  });\n};\n\nconst formProject = (element, myProject) => {\n  const containerInput = document.createElement('div');\n  const input = document.createElement('INPUT');\n  const button = document.createElement('button');\n  button.textContent = 'Add project';\n  button.id = 'lol';\n  input.id = 'project';\n  containerInput.id = 'form-addProj';\n  containerInput.classList.add('cont-newproject');\n  containerInput.append(input);\n  containerInput.append(button);\n  element.append(containerInput);\n  displayNewProject(containerInput, myProject);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/formNewProject.js?");

/***/ }),

/***/ "./src/assets/getLocal.js":
/*!********************************!*\
  !*** ./src/assets/getLocal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalProject)\n/* harmony export */ });\nconst getLocalProject = (key) => {\n  let project;\n  if (localStorage.getItem(key) === null) {\n    project = [];\n  } else {\n    project = JSON.parse(localStorage.getItem(key));\n  }\n  return project;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/getLocal.js?");

/***/ }),

/***/ "./src/assets/init.js":
/*!****************************!*\
  !*** ./src/assets/init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formNewProject */ \"./src/assets/formNewProject.js\");\n/* harmony import */ var _projectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectAll */ \"./src/assets/projectAll.js\");\n/* harmony import */ var _clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickDisplayTask */ \"./src/assets/clickDisplayTask.js\");\n/* harmony import */ var _taskAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskAll */ \"./src/assets/taskAll.js\");\n/* harmony import */ var _taskProjectDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskProjectDefault */ \"./src/assets/taskProjectDefault.js\");\n\n\n\n\n\n\nconst init = () => {\n  const containerProjects = document.querySelector('#my-projects');\n  const containerTasks = document.querySelector('#cont');\n  const addProjectBtn = document.querySelector('#addProj');\n  (0,_taskProjectDefault__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_projectAll__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_taskAll__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_formNewProject__WEBPACK_IMPORTED_MODULE_0__.default)(addProjectBtn);\n  (0,_clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__.default)(containerProjects, containerTasks);\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/assets/init.js?");

/***/ }),

/***/ "./src/assets/isDone.js":
/*!******************************!*\
  !*** ./src/assets/isDone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDone)\n/* harmony export */ });\nconst isDone = (done) => {\n  if (!done) {\n    return 'Incomplete';\n  }\n  return 'Completed';\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/isDone.js?");

/***/ }),

/***/ "./src/assets/projectAll.js":
/*!**********************************!*\
  !*** ./src/assets/projectAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\n\nconst projects = () => {\n  const nameStore = 'projects';\n  const proj = (0,_getLocal__WEBPACK_IMPORTED_MODULE_1__.default)(nameStore);\n\n  proj.map((item) => (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(item));\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/projectAll.js?");

/***/ }),

/***/ "./src/assets/taskAll.js":
/*!*******************************!*\
  !*** ./src/assets/taskAll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskAll)\n/* harmony export */ });\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\n/* harmony import */ var _isDone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDone */ \"./src/assets/isDone.js\");\n/* harmony import */ var _defaultList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultList */ \"./src/assets/defaultList.js\");\n\n\n\n\nconst appending = (project, title, description, date, priority, done) => {\n  const container = document.querySelector('#cont');\n  const ulList = document.createElement('ul');\n  const liProjName = document.createElement('li');\n  const liProjTitle = document.createElement('li');\n  const liProjDesc = document.createElement('li');\n  const liProjDate = document.createElement('li');\n  const liProjDone = document.createElement('li');\n  const liProjprio = document.createElement('li');\n  const containerUl = document.createElement('div');\n  const defaultProject = document.createElement('li');\n  const dtList = (0,_defaultList__WEBPACK_IMPORTED_MODULE_2__.default)();\n  ulList.id = 'allTodos';\n  ulList.classList.add('task-list__all');\n  containerUl.classList.add('list-all__container');\n  const textDone = (0,_isDone__WEBPACK_IMPORTED_MODULE_1__.default)(done);\n  liProjName.textContent = project;\n  liProjTitle.textContent = title;\n  liProjDesc.textContent = description;\n  liProjDate.textContent = date;\n  liProjDone.textContent = textDone;\n  liProjprio.textContent = priority;\n  defaultProject.textContent = 'Project';\n\n  defaultProject.classList.add('proj-def');\n\n  liProjName.classList.add('proj-all');\n  liProjTitle.classList.add('title-all');\n  liProjDesc.classList.add('desc-all');\n  liProjDate.classList.add('date-all');\n  liProjDone.classList.add('prio-all');\n  liProjprio.classList.add('done-all');\n  liProjprio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_0__.default)(priority));\n  ulList.append(liProjName);\n  ulList.append(liProjTitle);\n  ulList.append(liProjDesc);\n  ulList.append(liProjDate);\n  ulList.append(liProjDone);\n  ulList.append(liProjprio);\n  dtList.prepend(defaultProject);\n  containerUl.append(dtList);\n  containerUl.append(ulList);\n  container.append(containerUl);\n};\n\nconst displayAll = (alltasks) => {\n  alltasks.forEach((item) => {\n    appending(item.project, item.title, item.description, item.date, item.priority, item.done);\n  });\n};\n\n\nconst taskAll = () => {\n  const result = JSON.parse(localStorage.getItem('task'));\n  displayAll(result);\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskAll.js?");

/***/ }),

/***/ "./src/assets/taskCreatorClass.js":
/*!****************************************!*\
  !*** ./src/assets/taskCreatorClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskGenerator)\n/* harmony export */ });\nclass TaskCreator {\n  constructor(project, title, description, date, priority) {\n    this.project = project;\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n    this.done = false;\n  }\n}\n\nconst taskGenerator = (project, title, description, date, priority) => {\n  const theTask = new TaskCreator(project, title, description, date, priority);\n  const nameStore = 'task';\n  return [nameStore, theTask];\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskCreatorClass.js?");

/***/ }),

/***/ "./src/assets/taskDisplayElements.js":
/*!*******************************************!*\
  !*** ./src/assets/taskDisplayElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayElements)\n/* harmony export */ });\n/* harmony import */ var _taskOnlyClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOnlyClick */ \"./src/assets/taskOnlyClick.js\");\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\n/* harmony import */ var _isDone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDone */ \"./src/assets/isDone.js\");\n/* harmony import */ var _defaultList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultList */ \"./src/assets/defaultList.js\");\n\n\n\n\n\nconst taskDisplayElements = (parent, title, description, date, priority, done) => {\n  const container = document.createElement('div');\n  const containerContent = document.createElement('div');\n  const ulElement = document.createElement('ul');\n  const liTitle = document.createElement('li');\n  const liDescription = document.createElement('li');\n  const liDate = document.createElement('li');\n  const liPrio = document.createElement('li');\n  const liDone = document.createElement('li');\n\n  const textDone = (0,_isDone__WEBPACK_IMPORTED_MODULE_2__.default)(done);\n  liDone.textContent = textDone;\n  liTitle.textContent = title;\n  liDescription.textContent = description;\n  liDate.textContent = date;\n  liPrio.textContent = priority;\n  container.classList.add('cont-form');\n  containerContent.classList.add('task');\n  liPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(priority));\n  const unionUlId = title.split(' ').join('-').concat(date);\n\n  ulElement.classList.add('task-list');\n\n  liTitle.classList.add('title-task__proj');\n  liDescription.classList.add('desc-task__proj');\n  liDate.classList.add('date-task__proj');\n  liPrio.classList.add('prio-task__proj');\n  liDone.classList.add('done-task__proj');\n\n\n  ulElement.id = unionUlId;\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n  const listDef = (0,_defaultList__WEBPACK_IMPORTED_MODULE_3__.default)();\n  listDef.classList.remove('task-list__default');\n  listDef.classList.add('task-list__defproj');\n  containerContent.append(listDef);\n  containerContent.append(ulElement);\n  parent.append(containerContent);\n  (0,_taskOnlyClick__WEBPACK_IMPORTED_MODULE_0__.default)(containerContent);\n};\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayElements.js?");

/***/ }),

/***/ "./src/assets/taskDisplayNoTask.js":
/*!*****************************************!*\
  !*** ./src/assets/taskDisplayNoTask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayNoTask)\n/* harmony export */ });\n\nconst taskDisplayNoTask = (taskContainer, value) => {\n  const container = document.createElement('div');\n  const containerContent = document.createElement('div');\n  const notask = document.createElement('h1');\n  container.classList.add('cont-form');\n  notask.id = 'notask';\n  notask.textContent = `Your project ${value} dont have tasks`;\n  containerContent.classList.add('task');\n  containerContent.append(notask);\n  taskContainer.append(containerContent);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayNoTask.js?");

/***/ }),

/***/ "./src/assets/taskForm.js":
/*!********************************!*\
  !*** ./src/assets/taskForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCreatorClass */ \"./src/assets/taskCreatorClass.js\");\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n\n\n\n\n\nconst removeElement = (task) => {\n  task.forEach((item) => { item.remove(); });\n};\n\nconst reloadElement = () => {\n  const tasks = document.querySelectorAll('div.task');\n  removeElement(tasks);\n};\n\nconst getValueFormTask = () => {\n  const title = document.querySelector('#title').value;\n  const description = document.querySelector('#description').value;\n  const date = document.querySelector('#date').value;\n  const priority = document.querySelector('#priority').value;\n  const project = document.getElementById('hiden').value;\n\n  return [project, title, description, date, priority];\n};\n\nconst createNewTask = (element) => {\n  element.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const parent = element.parentElement;\n    const valuesTask = getValueFormTask();\n    const task = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__.default)(...valuesTask);\n    (0,_addToLocal__WEBPACK_IMPORTED_MODULE_1__.default)(...task);\n    const projectArr = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(element.id);\n    parent.append(element);\n    reloadElement();\n    projectArr.forEach((item) => {\n      (0,_taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__.default)(parent, item.title, item.description,\n        item.date, item.priority, item.done);\n    });\n    element.reset();\n  });\n};\n\n\nconst taskForm = (hiden) => {\n  const form = document.createElement('form');\n  const labelTitle = document.createElement('label');\n  const inputT = document.createElement('input');\n  const labelDesc = document.createElement('label');\n  const inputDescription = document.createElement('input');\n  const labelDueDate = document.createElement('label');\n  const inputDueDate = document.createElement('input');\n  const labelPrio = document.createElement('label');\n  const inputPrio = document.createElement('select');\n  const important = document.createElement('option');\n  const normal = document.createElement('option');\n  const low = document.createElement('option');\n  const hidenInput = document.createElement('input');\n  const sub = document.createElement('button');\n  const divT = document.createElement('div');\n  const divD = document.createElement('div');\n  const divDa = document.createElement('div');\n  const divP = document.createElement('div');\n\n  important.textContent = 'Important';\n  normal.textContent = 'Normal';\n  low.textContent = 'Low';\n  labelPrio.textContent = 'Select the priority';\n  inputPrio.append(important);\n  inputPrio.append(normal);\n  inputPrio.append(low);\n\n  form.id = hiden;\n\n  hidenInput.name = 'task';\n  inputT.id = 'title';\n  inputDescription.id = 'description';\n  inputDueDate.id = 'date';\n  hidenInput.id = 'hiden';\n  inputPrio.id = 'priority';\n  labelTitle.textContent = 'What you gonna do?';\n  labelDesc.textContent = 'How you gonna do it?';\n  labelDueDate.textContent = 'When it must be done?';\n  inputDueDate.setAttribute('type', 'date');\n  hidenInput.setAttribute('type', 'hidden');\n  hidenInput.setAttribute('value', hiden);\n  sub.setAttribute('type', 'submit');\n  sub.textContent = 'Add new task';\n\n  divT.classList.add('cont-ftitle');\n  divD.classList.add('cont-fdesc');\n  divDa.classList.add('cont-fdate');\n  divP.classList.add('cont-fprio');\n  sub.classList.add('cont-fbuton');\n\n  divP.append(labelPrio);\n  divP.append(inputPrio);\n  divT.append(labelTitle);\n  divT.append(inputT);\n  divD.append(labelDesc);\n  divD.append(inputDescription);\n  divDa.append(labelDueDate);\n  divDa.append(inputDueDate);\n  form.append(divT);\n  form.append(divD);\n  form.append(divDa);\n  form.append(divP);\n  form.append(sub);\n  form.append(hidenInput);\n\n  createNewTask(form);\n  return form;\n};\n\n\n//# sourceURL=webpack://todo/./src/assets/taskForm.js?");

/***/ }),

/***/ "./src/assets/taskInLocal.js":
/*!***********************************!*\
  !*** ./src/assets/taskInLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskInLocal)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nconst taskInLocal = (titleProject) => {\n  const result = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  const task = result.filter((item) => {\n    if (item.project === titleProject) {\n      return true;\n    }\n    return false;\n  });\n  return task;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskInLocal.js?");

/***/ }),

/***/ "./src/assets/taskOnly.js":
/*!********************************!*\
  !*** ./src/assets/taskOnly.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskOnly)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\n\n\n\n\nconst taskClose = (container) => {\n  container.classList.remove('visible');\n  container.innerHTML = '';\n};\n\nconst changeUlTask = (id, newValues, container) => {\n  const ulElement = document.querySelector(`#${id}`);\n  const liTitle = document.createElement('li');\n  const liDescription = document.createElement('li');\n  const liDate = document.createElement('li');\n  const liPrio = document.createElement('li');\n  const liDone = document.createElement('li');\n\n  [liTitle.textContent, liDescription.textContent,\n    liDate.textContent, liPrio.textContent, liDone.textContent] = newValues;\n\n  liPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(newValues[3]));\n\n  liTitle.classList.add('title-task__proj');\n  liDescription.classList.add('desc-task__proj');\n  liDate.classList.add('date-task__proj');\n  liPrio.classList.add('prio-task__proj');\n  liDone.classList.add('done-task__proj');\n\n  ulElement.innerHTML = '';\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n\n  taskClose(container);\n};\n\n\nconst changeInLocal = (oldContent, container, newValues) => {\n  const allTask = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  const proj = oldContent[0];\n  const title = oldContent[1];\n  const desc = oldContent[2];\n  const date = oldContent[3];\n  const titlen = newValues[0];\n  const descn = newValues[1];\n  const daten = newValues[2];\n  const prion = newValues[3];\n  const donen = newValues[4];\n  const lookForId = title.split(' ').join('-').concat(date);\n\n  allTask.forEach((item) => {\n    if (item.project === proj && item.title === title && item.description === desc) {\n      item.title = titlen;\n      item.description = descn;\n      item.date = daten;\n      item.priority = prion;\n      item.done = donen === 'Completed';\n    }\n  });\n\n  localStorage.setItem('task', JSON.stringify(allTask));\n  changeUlTask(lookForId, newValues, container);\n};\n\nconst valuesForm = () => {\n  const title = document.querySelector('#taskOnlyTitle').value;\n  const desc = document.querySelector('#taskOnlyDesc').value;\n  const date = document.querySelector('#taskOnlyDate').value;\n  const prio = document.querySelector('#taskOnlyPrio').value;\n  const done = document.querySelector('#taskOnlyDOne').value;\n\n  return [title, desc, date, prio, done];\n};\n\nconst submitForm = (form, oldContent, container) => {\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const newValues = valuesForm();\n    changeInLocal(oldContent, container, newValues);\n  });\n};\n\nconst taskEditAddToLocal = (container) => {\n  const project = document.forms[0].id;\n  const arrElementsTask = Array.from(container.children, ({ textContent }) => textContent)\n    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');\n  arrElementsTask.unshift(project);\n  return arrElementsTask;\n};\n\nconst taskEdit = (arr, container) => {\n  const oldValues = arr;\n  let someOld = [];\n  const form = document.createElement('form');\n  const labelTitle = document.createElement('label');\n  const inputT = document.createElement('input');\n  const labelDesc = document.createElement('label');\n  const inputDescription = document.createElement('input');\n  const labelDueDate = document.createElement('label');\n  const inputDueDate = document.createElement('input');\n  const labelPrio = document.createElement('label');\n  const inputPrio = document.createElement('select');\n  const important = document.createElement('option');\n  const normal = document.createElement('option');\n  const low = document.createElement('option');\n  const labelDone = document.createElement('label');\n  const selectDone = document.createElement('select');\n  const optionNotDone = document.createElement('option');\n  const optionDone = document.createElement('option');\n  const sub = document.createElement('button');\n\n  important.textContent = 'Important';\n  normal.textContent = 'Normal';\n  low.textContent = 'Low';\n  labelPrio.textContent = 'Select the priority';\n  inputPrio.append(important);\n  inputPrio.append(normal);\n  inputPrio.append(low);\n\n  optionDone.textContent = 'Completed';\n  optionNotDone.textContent = 'Incomplete';\n  labelDone.textContent = 'if its Done';\n  selectDone.append(optionDone);\n  selectDone.append(optionNotDone);\n\n  someOld = [oldValues[1], oldValues[2], oldValues[3]];\n\n  [inputT.value, inputDescription.value, inputDueDate.value] = someOld;\n\n  // inputT.value = oldValues[1];\n  // inputDescription.value = oldValues[2];\n  // inputDueDate.value = oldValues[3];\n\n  inputT.id = 'taskOnlyTitle';\n  inputDescription.id = 'taskOnlyDesc';\n  inputDueDate.id = 'taskOnlyDate';\n  inputPrio.id = 'taskOnlyPrio';\n  selectDone.id = 'taskOnlyDOne';\n\n  labelTitle.textContent = 'What you gonna do?';\n  labelDesc.textContent = 'How you gonna do it?';\n  labelDueDate.textContent = 'When it must be done?';\n  inputDueDate.setAttribute('type', 'date');\n\n\n  sub.setAttribute('type', 'submit');\n  sub.textContent = 'Update task';\n\n\n  form.append(labelTitle);\n  form.append(inputT);\n  form.append(labelDesc);\n  form.append(inputDescription);\n  form.append(labelDueDate);\n  form.append(inputDueDate);\n  form.append(labelPrio);\n  form.append(inputPrio);\n  form.append(labelDone);\n  form.append(selectDone);\n  form.append(sub);\n\n  container.innerHTML = '';\n  container.append(form);\n  submitForm(form, oldValues, container);\n};\n\nconst reloadElement = (arrElement) => {\n  const task = document.querySelectorAll('div.task');\n  task.forEach((item) => {\n    if (item.innerText.includes(arrElement[0]) && item.innerText.includes(arrElement[1])) {\n      item.remove();\n    }\n  });\n};\n\nconst taskDelete = (container, parent) => {\n  const project = document.forms[0].id;\n  const arrElementsTask = Array.from(container.children, ({ textContent }) => textContent)\n    .filter((item) => item !== 'Delete this task' && item !== 'Close' && item !== 'Edit');\n  const title = arrElementsTask[0];\n  const desc = arrElementsTask[1];\n  const date = arrElementsTask[2];\n  const prio = arrElementsTask[3];\n\n  const allTask = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n\n  const allTaskWout = allTask.filter((item) => {\n    if (item.project === project && item.title === title\n      && item.description === desc && item.date === date && item.priority === prio) {\n      return false;\n    }\n    return true;\n  });\n\n  localStorage.setItem('task', JSON.stringify(allTaskWout));\n\n  taskClose(parent);\n  reloadElement(arrElementsTask);\n};\n\nconst taskClickEdit = (btn, containerTask) => {\n  btn.addEventListener('click', () => {\n    const parent = containerTask;\n    const arrElement = taskEditAddToLocal(containerTask.firstElementChild, parent);\n    taskEdit(arrElement, parent);\n  });\n};\n\nconst taskClickDelete = (btn, containerTask) => {\n  btn.addEventListener('click', () => {\n    const parent = containerTask;\n    taskDelete(containerTask.firstElementChild, parent);\n  });\n};\n\nconst taskClickClose = (btn, containerTask) => {\n  btn.addEventListener('click', () => {\n    taskClose(containerTask);\n  });\n};\n\nconst taskOnlyDisplay = (title, description, date, priority, done) => {\n  const containerTask = document.querySelector('#task-inv');\n  const containerAll = document.createElement('div');\n  const taskTitle = document.createElement('p');\n  const taskDesc = document.createElement('p');\n  const taskDate = document.createElement('p');\n  const taskPrio = document.createElement('p');\n  const taskDone = document.createElement('p');\n  const btnDelete = document.createElement('button');\n  const btnEdit = document.createElement('button');\n  const btnClose = document.createElement('button');\n\n  taskTitle.textContent = title;\n  taskDesc.textContent = description;\n  taskDate.textContent = date;\n  taskPrio.textContent = priority;\n  taskDone.textContent = done;\n  btnDelete.textContent = 'Delete this task';\n  btnEdit.textContent = 'Edit';\n  btnClose.textContent = 'Close';\n\n  taskTitle.classList.add('title-task__only');\n  taskDesc.classList.add('desc-task__only');\n  taskDate.classList.add('date-task__only');\n  taskPrio.classList.add('prio-task__only');\n  taskDone.classList.add('done-task__only');\n\n\n  btnClose.id = 'close_task';\n  btnEdit.id = 'edit_task';\n  btnDelete.id = 'delete_task';\n  taskPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(priority));\n  containerAll.append(taskTitle);\n  containerAll.append(taskDesc);\n  containerAll.append(taskDate);\n  containerAll.append(taskPrio);\n  containerAll.append(taskDone);\n  containerAll.append(btnDelete);\n  containerAll.append(btnEdit);\n  containerAll.append(btnClose);\n\n  containerAll.classList.add('only-one__task');\n  containerTask.append(containerAll);\n  containerTask.classList.toggle('visible');\n\n  taskClickDelete(btnDelete, containerTask);\n  taskClickEdit(btnEdit, containerTask);\n  taskClickClose(btnClose, containerTask);\n};\n\n\nconst taskOnly = (ultask) => {\n  const arrListTask = Array.from(ultask.children, ({ textContent }) => textContent);\n  taskOnlyDisplay(...arrListTask);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskOnly.js?");

/***/ }),

/***/ "./src/assets/taskOnlyClick.js":
/*!*************************************!*\
  !*** ./src/assets/taskOnlyClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskOnlyClick)\n/* harmony export */ });\n/* harmony import */ var _taskOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOnly */ \"./src/assets/taskOnly.js\");\n\n\nconst taskOnlyClick = (oneTask) => {\n  oneTask.addEventListener('click', () => { (0,_taskOnly__WEBPACK_IMPORTED_MODULE_0__.default)(oneTask.lastElementChild); });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskOnlyClick.js?");

/***/ }),

/***/ "./src/assets/taskProjectDefault.js":
/*!******************************************!*\
  !*** ./src/assets/taskProjectDefault.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskProjectDefault)\n/* harmony export */ });\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n/* harmony import */ var _taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCreatorClass */ \"./src/assets/taskCreatorClass.js\");\n\n\n\n\nconst checkLocal = (task1, task2) => {\n  const result = (0,_getLocal__WEBPACK_IMPORTED_MODULE_1__.default)('task');\n  if (result.length === 0) {\n    (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)(...task1);\n    (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)(...task2);\n  }\n};\n\nconst taskProjectDefault = () => {\n  const all = 'All';\n  const project1 = 'Learn JavaScript';\n  const project2 = 'Learn UI Design';\n  const title1 = 'Study ES6';\n  const desc1 = 'I will read documentation';\n  const date1 = '2021-02-13';\n  const prio1 = 'Important';\n  const title2 = 'Study color Theory';\n  const desc2 = 'I will take a course in Udemy';\n  const date2 = '2021-02-14';\n  const prio2 = 'Normal';\n\n  const task1 = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__.default)(project1, title1, desc1, date1, prio1);\n  const task2 = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__.default)(project2, title2, desc2, date2, prio2);\n\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', all);\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', project1);\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', project2);\n\n  checkLocal(task1, task2);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskProjectDefault.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _assets_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/init */ \"./src/assets/init.js\");\n\n\n\n(0,_assets_init__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;