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

/***/ "./src/assets/addToLocal.js":
/*!**********************************!*\
  !*** ./src/assets/addToLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addToLocalProject)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nvar addToLocalProject = function addToLocalProject(key, item) {\n  var project = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)(key);\n\n  var isIn = function isIn(element) {\n    return element === item;\n  };\n\n  if (!project.some(isIn)) {\n    project.push(item);\n  }\n\n  localStorage.setItem(key, JSON.stringify(project));\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/addToLocal.js?");

/***/ }),

/***/ "./src/assets/checkPriority.js":
/*!*************************************!*\
  !*** ./src/assets/checkPriority.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ priorityCheck)\n/* harmony export */ });\nvar priorityCheck = function priorityCheck(priority) {\n  if (priority === 'Important') {\n    return 'pill-important';\n  }\n\n  if (priority === 'Normal') {\n    return 'pill-normal';\n  }\n\n  return 'pill-low';\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/checkPriority.js?");

/***/ }),

/***/ "./src/assets/clickDisplayTask.js":
/*!****************************************!*\
  !*** ./src/assets/clickDisplayTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickDisplayTask)\n/* harmony export */ });\n/* harmony import */ var _taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDisplayNoTask */ \"./src/assets/taskDisplayNoTask.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ \"./src/assets/taskForm.js\");\n/* harmony import */ var _taskAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskAll */ \"./src/assets/taskAll.js\");\n\n\n\n\n\n\nvar clickDisplayTask = function clickDisplayTask(element, sibling) {\n  element.addEventListener('click', function (e) {\n    var task = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(e.target.textContent);\n\n    if (e.target.dataset.name === 'All') {\n      sibling.textContent = '';\n      (0,_taskAll__WEBPACK_IMPORTED_MODULE_4__.default)();\n    }\n\n    if (e.target.dataset.name && task.length === 0 && e.target.dataset.name !== 'All') {\n      sibling.textContent = '';\n      var form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.default)(e.target.textContent);\n      sibling.append(form);\n      (0,_taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__.default)(sibling, e.target.textContent);\n    }\n\n    if (e.target.dataset.name && task.length !== 0 && e.target.dataset.name !== 'All') {\n      sibling.textContent = '';\n\n      var _form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.default)(e.target.textContent);\n\n      sibling.append(_form);\n      task.forEach(function (item) {\n        (0,_taskDisplayElements__WEBPACK_IMPORTED_MODULE_1__.default)(sibling, item.title, item.description, item.date, item.priority, item.done);\n      });\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/clickDisplayTask.js?");

/***/ }),

/***/ "./src/assets/defaultList.js":
/*!***********************************!*\
  !*** ./src/assets/defaultList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultList)\n/* harmony export */ });\nvar defaultList = function defaultList() {\n  var ulElement = document.createElement('ul');\n  var liTitle = document.createElement('li');\n  var liDescription = document.createElement('li');\n  var liDate = document.createElement('li');\n  var liPrio = document.createElement('li');\n  var liDone = document.createElement('li');\n  liDone.textContent = 'Status';\n  liTitle.textContent = 'Title';\n  liDescription.textContent = 'Description';\n  liDate.textContent = 'Date';\n  liPrio.textContent = 'Priority';\n  liDone.classList.add('done-def');\n  liTitle.classList.add('title-def');\n  liDescription.classList.add('desc-def');\n  liDate.classList.add('date-def');\n  liPrio.classList.add('prio-def');\n  ulElement.classList.add('task-list__default');\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n  return ulElement;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/defaultList.js?");

/***/ }),

/***/ "./src/assets/displayProject.js":
/*!**************************************!*\
  !*** ./src/assets/displayProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n\n\nvar displayProject = function displayProject(element) {\n  var containerProject = document.querySelector('#my-projects');\n  var project = document.createElement('p');\n  project.dataset.name = element;\n  var nameStore = 'projects';\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)(nameStore, element);\n  project.textContent = element;\n  containerProject.append(project);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/displayProject.js?");

/***/ }),

/***/ "./src/assets/formNewProject.js":
/*!**************************************!*\
  !*** ./src/assets/formNewProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formProject)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n\n\nvar displayNewProject = function displayNewProject(element) {\n  element.addEventListener('click', function (e) {\n    var input = e.target.previousElementSibling;\n\n    if (e.target.id === 'lol') {\n      if (input.value) {\n        (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(input.value);\n        input.value = '';\n      }\n    }\n  });\n};\n\nvar formProject = function formProject(element, myProject) {\n  var containerInput = document.createElement('div');\n  var input = document.createElement('INPUT');\n  var button = document.createElement('button');\n  button.textContent = 'Add project';\n  button.id = 'lol';\n  input.id = 'project';\n  containerInput.id = 'form-addProj'; // containerInput.classList.add('cont-newproject');\n\n  containerInput.append(input);\n  containerInput.append(button);\n  element.append(containerInput);\n  displayNewProject(containerInput, myProject);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/formNewProject.js?");

/***/ }),

/***/ "./src/assets/getLocal.js":
/*!********************************!*\
  !*** ./src/assets/getLocal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalProject)\n/* harmony export */ });\nvar getLocalProject = function getLocalProject(key) {\n  var project;\n\n  if (localStorage.getItem(key) === null) {\n    project = [];\n  } else {\n    project = JSON.parse(localStorage.getItem(key));\n  }\n\n  return project;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/getLocal.js?");

/***/ }),

/***/ "./src/assets/init.js":
/*!****************************!*\
  !*** ./src/assets/init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formNewProject */ \"./src/assets/formNewProject.js\");\n/* harmony import */ var _projectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectAll */ \"./src/assets/projectAll.js\");\n/* harmony import */ var _clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickDisplayTask */ \"./src/assets/clickDisplayTask.js\");\n/* harmony import */ var _taskAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskAll */ \"./src/assets/taskAll.js\");\n/* harmony import */ var _taskProjectDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskProjectDefault */ \"./src/assets/taskProjectDefault.js\");\n\n\n\n\n\n\nvar init = function init() {\n  var containerProjects = document.querySelector('#my-projects');\n  var containerTasks = document.querySelector('#cont');\n  var addProjectBtn = document.querySelector('#addProj');\n  (0,_taskProjectDefault__WEBPACK_IMPORTED_MODULE_4__.default)();\n  (0,_projectAll__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_taskAll__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_formNewProject__WEBPACK_IMPORTED_MODULE_0__.default)(addProjectBtn);\n  (0,_clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__.default)(containerProjects, containerTasks);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/init.js?");

/***/ }),

/***/ "./src/assets/isDone.js":
/*!******************************!*\
  !*** ./src/assets/isDone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isDone)\n/* harmony export */ });\nvar isDone = function isDone(done) {\n  if (!done) {\n    return 'Incomplete';\n  }\n\n  return 'Completed';\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/isDone.js?");

/***/ }),

/***/ "./src/assets/messagesAlert.js":
/*!*************************************!*\
  !*** ./src/assets/messagesAlert.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"existInLocal\": () => (/* binding */ existInLocal),\n/* harmony export */   \"emptyForm\": () => (/* binding */ emptyForm)\n/* harmony export */ });\nvar existInLocal = function existInLocal(parent) {\n  var allreadyIn = document.createElement('span');\n  allreadyIn.textContent = 'This task already exist, try again';\n  allreadyIn.id = 'task_exist';\n  parent.append(allreadyIn);\n};\nvar emptyForm = function emptyForm(parent) {\n  var empForm = document.createElement('span');\n  empForm.textContent = 'We are missing values to setup your task, try again';\n  empForm.id = 'task_empty';\n  parent.append(empForm);\n};\n\n//# sourceURL=webpack://todo/./src/assets/messagesAlert.js?");

/***/ }),

/***/ "./src/assets/projectAll.js":
/*!**********************************!*\
  !*** ./src/assets/projectAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\n\nvar projects = function projects() {\n  var nameStore = 'projects';\n  var proj = (0,_getLocal__WEBPACK_IMPORTED_MODULE_1__.default)(nameStore);\n  proj.map(function (item) {\n    return (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(item);\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/projectAll.js?");

/***/ }),

/***/ "./src/assets/taskAll.js":
/*!*******************************!*\
  !*** ./src/assets/taskAll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskAll)\n/* harmony export */ });\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\n/* harmony import */ var _isDone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDone */ \"./src/assets/isDone.js\");\n/* harmony import */ var _defaultList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultList */ \"./src/assets/defaultList.js\");\n\n\n\n\nvar appending = function appending(project, title, description, date, priority, done) {\n  var container = document.querySelector('#cont');\n  var ulList = document.createElement('ul');\n  var liProjName = document.createElement('li');\n  var liProjTitle = document.createElement('li');\n  var liProjDesc = document.createElement('li');\n  var liProjDate = document.createElement('li');\n  var liProjDone = document.createElement('li');\n  var liProjprio = document.createElement('li');\n  var containerUl = document.createElement('div');\n  var defaultProject = document.createElement('li');\n  var dtList = (0,_defaultList__WEBPACK_IMPORTED_MODULE_2__.default)();\n  ulList.id = 'allTodos';\n  ulList.classList.add('task-list__all');\n  containerUl.classList.add('list-all__container');\n  var textDone = (0,_isDone__WEBPACK_IMPORTED_MODULE_1__.default)(done);\n  liProjName.textContent = project;\n  liProjTitle.textContent = title;\n  liProjDesc.textContent = description;\n  liProjDate.textContent = date;\n  liProjDone.textContent = textDone;\n  liProjprio.textContent = priority;\n  defaultProject.textContent = 'Project';\n  defaultProject.classList.add('proj-def');\n  liProjName.classList.add('proj-all');\n  liProjTitle.classList.add('title-all');\n  liProjDesc.classList.add('desc-all');\n  liProjDate.classList.add('date-all');\n  liProjDone.classList.add('prio-all');\n  liProjprio.classList.add('done-all');\n  liProjprio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_0__.default)(priority));\n  ulList.append(liProjName);\n  ulList.append(liProjTitle);\n  ulList.append(liProjDesc);\n  ulList.append(liProjDate);\n  ulList.append(liProjDone);\n  ulList.append(liProjprio);\n  dtList.prepend(defaultProject);\n  containerUl.append(dtList);\n  containerUl.append(ulList);\n  container.append(containerUl);\n};\n\nvar displayAll = function displayAll(alltasks) {\n  alltasks.forEach(function (item) {\n    appending(item.project, item.title, item.description, item.date, item.priority, item.done);\n  });\n};\n\nvar taskAll = function taskAll() {\n  var result = JSON.parse(localStorage.getItem('task'));\n  displayAll(result);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskAll.js?");

/***/ }),

/***/ "./src/assets/taskCreatorClass.js":
/*!****************************************!*\
  !*** ./src/assets/taskCreatorClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskGenerator)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TaskCreator = function TaskCreator(project, title, description, date, priority) {\n  _classCallCheck(this, TaskCreator);\n\n  this.project = project;\n  this.title = title;\n  this.description = description;\n  this.date = date;\n  this.priority = priority;\n  this.done = false;\n};\n\nvar taskGenerator = function taskGenerator(project, title, description, date, priority) {\n  var theTask = new TaskCreator(project, title, description, date, priority);\n  var nameStore = 'task';\n  return [nameStore, theTask];\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskCreatorClass.js?");

/***/ }),

/***/ "./src/assets/taskDisplayElements.js":
/*!*******************************************!*\
  !*** ./src/assets/taskDisplayElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayElements)\n/* harmony export */ });\n/* harmony import */ var _taskOnlyClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOnlyClick */ \"./src/assets/taskOnlyClick.js\");\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\n/* harmony import */ var _isDone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDone */ \"./src/assets/isDone.js\");\n/* harmony import */ var _defaultList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultList */ \"./src/assets/defaultList.js\");\n\n\n\n\n\nvar taskDisplayElements = function taskDisplayElements(parent, title, description, date, priority, done) {\n  var container = document.createElement('div');\n  var containerContent = document.createElement('div');\n  var ulElement = document.createElement('ul');\n  var liTitle = document.createElement('li');\n  var liDescription = document.createElement('li');\n  var liDate = document.createElement('li');\n  var liPrio = document.createElement('li');\n  var liDone = document.createElement('li');\n  var textDone = (0,_isDone__WEBPACK_IMPORTED_MODULE_2__.default)(done);\n  liDone.textContent = textDone;\n  liTitle.textContent = title;\n  liDescription.textContent = description;\n  liDate.textContent = date;\n  liPrio.textContent = priority;\n  container.classList.add('cont-form');\n  containerContent.classList.add('task');\n  liPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(priority));\n  var unionUlId = title.split(' ').join('-').concat(date);\n  ulElement.classList.add('task-list');\n  liTitle.classList.add('title-task__proj');\n  liDescription.classList.add('desc-task__proj');\n  liDate.classList.add('date-task__proj');\n  liPrio.classList.add('prio-task__proj');\n  liDone.classList.add('done-task__proj');\n  ulElement.id = unionUlId;\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n  var listDef = (0,_defaultList__WEBPACK_IMPORTED_MODULE_3__.default)();\n  listDef.classList.remove('task-list__default');\n  listDef.classList.add('task-list__defproj');\n  containerContent.append(listDef);\n  containerContent.append(ulElement);\n  parent.append(containerContent);\n  (0,_taskOnlyClick__WEBPACK_IMPORTED_MODULE_0__.default)(containerContent);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayElements.js?");

/***/ }),

/***/ "./src/assets/taskDisplayNoTask.js":
/*!*****************************************!*\
  !*** ./src/assets/taskDisplayNoTask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayNoTask)\n/* harmony export */ });\nvar taskDisplayNoTask = function taskDisplayNoTask(taskContainer, value) {\n  var container = document.createElement('div');\n  var containerContent = document.createElement('div');\n  var notask = document.createElement('h1');\n  container.classList.add('cont-form');\n  notask.id = 'notask';\n  notask.textContent = \"Your project \".concat(value, \" dont have tasks\");\n  containerContent.classList.add('task');\n  containerContent.append(notask);\n  taskContainer.append(containerContent);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayNoTask.js?");

/***/ }),

/***/ "./src/assets/taskForm.js":
/*!********************************!*\
  !*** ./src/assets/taskForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskForm)\n/* harmony export */ });\n/* harmony import */ var _taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCreatorClass */ \"./src/assets/taskCreatorClass.js\");\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n/* harmony import */ var _taskIsIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskIsIn */ \"./src/assets/taskIsIn.js\");\n/* harmony import */ var _messagesAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messagesAlert */ \"./src/assets/messagesAlert.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\nvar removeElement = function removeElement(task) {\n  task.forEach(function (item) {\n    item.remove();\n  });\n};\n\nvar reloadElement = function reloadElement() {\n  var tasks = document.querySelectorAll('div.task');\n  removeElement(tasks);\n};\n\nvar getValueFormTask = function getValueFormTask() {\n  var title = document.querySelector('#title').value;\n  var description = document.querySelector('#description').value;\n  var date = document.querySelector('#date').value;\n  var priority = document.querySelector('#priority').value;\n  var project = document.getElementById('hiden').value;\n  return [project, title, description, date, priority];\n};\n\nvar createNewTask = function createNewTask(element) {\n  element.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var parent = element.parentElement;\n    var valuesTask = getValueFormTask();\n\n    var empty = function empty(item) {\n      return item === '';\n    };\n\n    var filtered = (0,_taskIsIn__WEBPACK_IMPORTED_MODULE_4__.default)(valuesTask);\n\n    if (valuesTask.some(empty)) {\n      (0,_messagesAlert__WEBPACK_IMPORTED_MODULE_5__.emptyForm)(element);\n      setTimeout(function () {\n        document.querySelector('#task_empty').remove();\n      }, 3500);\n    } else if (filtered.length === 0) {\n      var task = _taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__.default.apply(void 0, _toConsumableArray(valuesTask));\n      _addToLocal__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, _toConsumableArray(task));\n      var projectArr = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(element.id);\n      parent.append(element);\n      reloadElement();\n      projectArr.forEach(function (item) {\n        (0,_taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__.default)(parent, item.title, item.description, item.date, item.priority, item.done);\n      });\n    } else {\n      (0,_messagesAlert__WEBPACK_IMPORTED_MODULE_5__.existInLocal)(element);\n      setTimeout(function () {\n        document.querySelector('#task_exist').remove();\n      }, 3500);\n    }\n\n    element.reset();\n  });\n};\n\nvar taskForm = function taskForm(hiden) {\n  var form = document.createElement('form');\n  var labelTitle = document.createElement('label');\n  var inputT = document.createElement('input');\n  var labelDesc = document.createElement('label');\n  var inputDescription = document.createElement('input');\n  var labelDueDate = document.createElement('label');\n  var inputDueDate = document.createElement('input');\n  var labelPrio = document.createElement('label');\n  var inputPrio = document.createElement('select');\n  var important = document.createElement('option');\n  var normal = document.createElement('option');\n  var low = document.createElement('option');\n  var hidenInput = document.createElement('input');\n  var sub = document.createElement('button');\n  var divT = document.createElement('div');\n  var divD = document.createElement('div');\n  var divDa = document.createElement('div');\n  var divP = document.createElement('div');\n  important.textContent = 'Important';\n  normal.textContent = 'Normal';\n  low.textContent = 'Low';\n  labelPrio.textContent = 'Select the priority';\n  inputPrio.append(important);\n  inputPrio.append(normal);\n  inputPrio.append(low);\n  form.id = hiden;\n  hidenInput.name = 'task';\n  inputT.id = 'title';\n  inputDescription.id = 'description';\n  inputDueDate.id = 'date';\n  hidenInput.id = 'hiden';\n  inputPrio.id = 'priority';\n  labelTitle.textContent = 'What you gonna do?';\n  labelDesc.textContent = 'How you gonna do it?';\n  labelDueDate.textContent = 'When it must be done?';\n  inputDueDate.setAttribute('type', 'date');\n  hidenInput.setAttribute('type', 'hidden');\n  hidenInput.setAttribute('value', hiden);\n  sub.setAttribute('type', 'submit');\n  sub.textContent = 'Add new task';\n  divT.classList.add('cont-ftitle');\n  divD.classList.add('cont-fdesc');\n  divDa.classList.add('cont-fdate');\n  divP.classList.add('cont-fprio');\n  sub.classList.add('cont-fbuton');\n  divP.append(labelPrio);\n  divP.append(inputPrio);\n  divT.append(labelTitle);\n  divT.append(inputT);\n  divD.append(labelDesc);\n  divD.append(inputDescription);\n  divDa.append(labelDueDate);\n  divDa.append(inputDueDate);\n  form.append(divT);\n  form.append(divD);\n  form.append(divDa);\n  form.append(divP);\n  form.append(sub);\n  form.append(hidenInput);\n  createNewTask(form);\n  return form;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskForm.js?");

/***/ }),

/***/ "./src/assets/taskInLocal.js":
/*!***********************************!*\
  !*** ./src/assets/taskInLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskInLocal)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nvar taskInLocal = function taskInLocal(titleProject) {\n  var result = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  var task = result.filter(function (item) {\n    if (item.project === titleProject) {\n      return true;\n    }\n\n    return false;\n  });\n  return task;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskInLocal.js?");

/***/ }),

/***/ "./src/assets/taskIsIn.js":
/*!********************************!*\
  !*** ./src/assets/taskIsIn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskIsIn)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nvar taskIsIn = function taskIsIn(arr) {\n  var project = '';\n  var title = '';\n  var desc = '';\n  var _ref = [arr[0], arr[1], arr[2]];\n  project = _ref[0];\n  title = _ref[1];\n  desc = _ref[2];\n  var allLocals = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  var filtered = allLocals.filter(function (item) {\n    return item.project === project && item.title === title && item.description === desc;\n  });\n  return filtered;\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskIsIn.js?");

/***/ }),

/***/ "./src/assets/taskOnly.js":
/*!********************************!*\
  !*** ./src/assets/taskOnly.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskOnly)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n/* harmony import */ var _checkPriority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkPriority */ \"./src/assets/checkPriority.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar taskClose = function taskClose(container) {\n  container.classList.remove('visible');\n  container.innerHTML = '';\n};\n\nvar changeUlTask = function changeUlTask(id, newValues, container) {\n  var ulElement = document.querySelector(\"#\".concat(id));\n  var liTitle = document.createElement('li');\n  var liDescription = document.createElement('li');\n  var liDate = document.createElement('li');\n  var liPrio = document.createElement('li');\n  var liDone = document.createElement('li');\n\n  var _newValues = _slicedToArray(newValues, 5);\n\n  liTitle.textContent = _newValues[0];\n  liDescription.textContent = _newValues[1];\n  liDate.textContent = _newValues[2];\n  liPrio.textContent = _newValues[3];\n  liDone.textContent = _newValues[4];\n  liPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(newValues[3]));\n  liTitle.classList.add('title-task__proj');\n  liDescription.classList.add('desc-task__proj');\n  liDate.classList.add('date-task__proj');\n  liPrio.classList.add('prio-task__proj');\n  liDone.classList.add('done-task__proj');\n  ulElement.innerHTML = '';\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n  taskClose(container);\n};\n\nvar changeInLocal = function changeInLocal(oldContent, container, newValues) {\n  var allTask = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  var proj = oldContent[0];\n  var title = oldContent[1];\n  var desc = oldContent[2];\n  var date = oldContent[3];\n  var titlen = newValues[0];\n  var descn = newValues[1];\n  var daten = newValues[2];\n  var prion = newValues[3];\n  var donen = newValues[4];\n  var lookForId = title.split(' ').join('-').concat(date);\n  allTask.forEach(function (item) {\n    if (item.project === proj && item.title === title && item.description === desc) {\n      item.title = titlen;\n      item.description = descn;\n      item.date = daten;\n      item.priority = prion;\n      item.done = donen === 'Completed';\n    }\n  });\n  localStorage.setItem('task', JSON.stringify(allTask));\n  changeUlTask(lookForId, newValues, container);\n};\n\nvar valuesForm = function valuesForm() {\n  var title = document.querySelector('#taskOnlyTitle').value;\n  var desc = document.querySelector('#taskOnlyDesc').value;\n  var date = document.querySelector('#taskOnlyDate').value;\n  var prio = document.querySelector('#taskOnlyPrio').value;\n  var done = document.querySelector('#taskOnlyDOne').value;\n  return [title, desc, date, prio, done];\n};\n\nvar submitForm = function submitForm(form, oldContent, container) {\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var newValues = valuesForm();\n    changeInLocal(oldContent, container, newValues);\n  });\n};\n\nvar taskEditAddToLocal = function taskEditAddToLocal(container) {\n  var project = document.forms[0].id;\n  var arrElementsTask = Array.from(container.children, function (_ref) {\n    var textContent = _ref.textContent;\n    return textContent;\n  }).filter(function (item) {\n    return item !== 'Delete this task' && item !== 'Close' && item !== 'Edit';\n  });\n  arrElementsTask.unshift(project);\n  return arrElementsTask;\n};\n\nvar taskEdit = function taskEdit(arr, container) {\n  var oldValues = arr;\n  var someOld = [];\n  var form = document.createElement('form');\n  var labelTitle = document.createElement('label');\n  var inputT = document.createElement('input');\n  var labelDesc = document.createElement('label');\n  var inputDescription = document.createElement('input');\n  var labelDueDate = document.createElement('label');\n  var inputDueDate = document.createElement('input');\n  var labelPrio = document.createElement('label');\n  var inputPrio = document.createElement('select');\n  var important = document.createElement('option');\n  var normal = document.createElement('option');\n  var low = document.createElement('option');\n  var labelDone = document.createElement('label');\n  var selectDone = document.createElement('select');\n  var optionNotDone = document.createElement('option');\n  var optionDone = document.createElement('option');\n  var sub = document.createElement('button');\n  important.textContent = 'Important';\n  normal.textContent = 'Normal';\n  low.textContent = 'Low';\n  labelPrio.textContent = 'Select the priority';\n  inputPrio.append(important);\n  inputPrio.append(normal);\n  inputPrio.append(low);\n  optionDone.textContent = 'Completed';\n  optionNotDone.textContent = 'Incomplete';\n  labelDone.textContent = 'if its Done';\n  selectDone.append(optionDone);\n  selectDone.append(optionNotDone);\n  someOld = [oldValues[1], oldValues[2], oldValues[3]];\n  var _someOld = someOld;\n\n  var _someOld2 = _slicedToArray(_someOld, 3);\n\n  inputT.value = _someOld2[0];\n  inputDescription.value = _someOld2[1];\n  inputDueDate.value = _someOld2[2];\n  // inputT.value = oldValues[1];\n  // inputDescription.value = oldValues[2];\n  // inputDueDate.value = oldValues[3];\n  inputT.id = 'taskOnlyTitle';\n  inputDescription.id = 'taskOnlyDesc';\n  inputDueDate.id = 'taskOnlyDate';\n  inputPrio.id = 'taskOnlyPrio';\n  selectDone.id = 'taskOnlyDOne';\n  labelTitle.textContent = 'What you gonna do?';\n  labelDesc.textContent = 'How you gonna do it?';\n  labelDueDate.textContent = 'When it must be done?';\n  inputDueDate.setAttribute('type', 'date');\n  sub.setAttribute('type', 'submit');\n  sub.textContent = 'Update task';\n  form.append(labelTitle);\n  form.append(inputT);\n  form.append(labelDesc);\n  form.append(inputDescription);\n  form.append(labelDueDate);\n  form.append(inputDueDate);\n  form.append(labelPrio);\n  form.append(inputPrio);\n  form.append(labelDone);\n  form.append(selectDone);\n  form.append(sub);\n  container.innerHTML = '';\n  container.append(form);\n  submitForm(form, oldValues, container);\n};\n\nvar reloadElement = function reloadElement(arrElement) {\n  var task = document.querySelectorAll('div.task');\n  task.forEach(function (item) {\n    if (item.innerText.includes(arrElement[0]) && item.innerText.includes(arrElement[1]) && item.innerText.includes(arrElement[2])) {\n      item.remove();\n    }\n  });\n};\n\nvar taskDelete = function taskDelete(container, parent) {\n  var project = document.forms[0].id;\n  var arrElementsTask = Array.from(container.children, function (_ref2) {\n    var textContent = _ref2.textContent;\n    return textContent;\n  }).filter(function (item) {\n    return item !== 'Delete this task' && item !== 'Close' && item !== 'Edit';\n  });\n  var title = arrElementsTask[0];\n  var desc = arrElementsTask[1];\n  var date = arrElementsTask[2];\n  var prio = arrElementsTask[3];\n  var allTask = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  var allTaskWout = allTask.filter(function (item) {\n    if (item.project === project && item.title === title && item.description === desc && item.date === date && item.priority === prio) {\n      return false;\n    }\n\n    return true;\n  });\n  localStorage.setItem('task', JSON.stringify(allTaskWout));\n  taskClose(parent);\n  reloadElement(arrElementsTask);\n};\n\nvar taskClickEdit = function taskClickEdit(btn, containerTask) {\n  btn.addEventListener('click', function () {\n    var parent = containerTask;\n    var arrElement = taskEditAddToLocal(containerTask.firstElementChild, parent);\n    taskEdit(arrElement, parent);\n  });\n};\n\nvar taskClickDelete = function taskClickDelete(btn, containerTask) {\n  btn.addEventListener('click', function () {\n    var parent = containerTask;\n    taskDelete(containerTask.firstElementChild, parent);\n  });\n};\n\nvar taskClickClose = function taskClickClose(btn, containerTask) {\n  btn.addEventListener('click', function () {\n    taskClose(containerTask);\n  });\n};\n\nvar taskOnlyDisplay = function taskOnlyDisplay(title, description, date, priority, done) {\n  var containerTask = document.querySelector('#task-inv');\n  var containerAll = document.createElement('div');\n  var taskTitle = document.createElement('p');\n  var taskDesc = document.createElement('p');\n  var taskDate = document.createElement('p');\n  var taskPrio = document.createElement('p');\n  var taskDone = document.createElement('p');\n  var btnDelete = document.createElement('button');\n  var btnEdit = document.createElement('button');\n  var btnClose = document.createElement('button');\n  taskTitle.textContent = title;\n  taskDesc.textContent = description;\n  taskDate.textContent = date;\n  taskPrio.textContent = priority;\n  taskDone.textContent = done;\n  btnDelete.textContent = 'Delete this task';\n  btnEdit.textContent = 'Edit';\n  btnClose.textContent = 'Close';\n  taskTitle.classList.add('title-task__only');\n  taskDesc.classList.add('desc-task__only');\n  taskDate.classList.add('date-task__only');\n  taskPrio.classList.add('prio-task__only');\n  taskDone.classList.add('done-task__only');\n  btnClose.id = 'close_task';\n  btnEdit.id = 'edit_task';\n  btnDelete.id = 'delete_task';\n  taskPrio.classList.add((0,_checkPriority__WEBPACK_IMPORTED_MODULE_1__.default)(priority));\n  containerAll.append(taskTitle);\n  containerAll.append(taskDesc);\n  containerAll.append(taskDate);\n  containerAll.append(taskPrio);\n  containerAll.append(taskDone);\n  containerAll.append(btnDelete);\n  containerAll.append(btnEdit);\n  containerAll.append(btnClose);\n  containerAll.classList.add('only-one__task');\n  containerTask.append(containerAll);\n  containerTask.classList.toggle('visible');\n  taskClickDelete(btnDelete, containerTask);\n  taskClickEdit(btnEdit, containerTask);\n  taskClickClose(btnClose, containerTask);\n};\n\nvar taskOnly = function taskOnly(ultask) {\n  var arrListTask = Array.from(ultask.children, function (_ref3) {\n    var textContent = _ref3.textContent;\n    return textContent;\n  });\n  taskOnlyDisplay.apply(void 0, _toConsumableArray(arrListTask));\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskOnly.js?");

/***/ }),

/***/ "./src/assets/taskOnlyClick.js":
/*!*************************************!*\
  !*** ./src/assets/taskOnlyClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskOnlyClick)\n/* harmony export */ });\n/* harmony import */ var _taskOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskOnly */ \"./src/assets/taskOnly.js\");\n\n\nvar taskOnlyClick = function taskOnlyClick(oneTask) {\n  oneTask.addEventListener('click', function () {\n    (0,_taskOnly__WEBPACK_IMPORTED_MODULE_0__.default)(oneTask.lastElementChild);\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskOnlyClick.js?");

/***/ }),

/***/ "./src/assets/taskProjectDefault.js":
/*!******************************************!*\
  !*** ./src/assets/taskProjectDefault.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskProjectDefault)\n/* harmony export */ });\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n/* harmony import */ var _taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCreatorClass */ \"./src/assets/taskCreatorClass.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar checkLocal = function checkLocal(task1, task2) {\n  var result = (0,_getLocal__WEBPACK_IMPORTED_MODULE_1__.default)('task');\n\n  if (result.length === 0) {\n    _addToLocal__WEBPACK_IMPORTED_MODULE_0__.default.apply(void 0, _toConsumableArray(task1));\n    _addToLocal__WEBPACK_IMPORTED_MODULE_0__.default.apply(void 0, _toConsumableArray(task2));\n  }\n};\n\nvar taskProjectDefault = function taskProjectDefault() {\n  var all = 'All';\n  var project1 = 'Learn JavaScript';\n  var project2 = 'Learn UI Design';\n  var title1 = 'Study ES6';\n  var desc1 = 'I will read documentation';\n  var date1 = '2021-02-13';\n  var prio1 = 'Important';\n  var title2 = 'Study color Theory';\n  var desc2 = 'I will take a course in Udemy';\n  var date2 = '2021-02-14';\n  var prio2 = 'Normal';\n  var task1 = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__.default)(project1, title1, desc1, date1, prio1);\n  var task2 = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_2__.default)(project2, title2, desc2, date2, prio2);\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', all);\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', project1);\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)('projects', project2);\n  checkLocal(task1, task2);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskProjectDefault.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _assets_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/init */ \"./src/assets/init.js\");\n\n\n(0,_assets_init__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/main.scss?");

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