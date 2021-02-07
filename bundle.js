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

/***/ "./src/assets/clickDisplayTask.js":
/*!****************************************!*\
  !*** ./src/assets/clickDisplayTask.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickDisplayTask)\n/* harmony export */ });\n/* harmony import */ var _taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDisplayNoTask */ \"./src/assets/taskDisplayNoTask.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ \"./src/assets/taskForm.js\");\n\n\n\n\n\nconst clickDisplayTask = (element, sibling) => {\n  element.addEventListener('click', (e) => {\n    const task = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(e.target.textContent);\n    console.log(task);\n    console.log(element)\n    console.log(e.target.dataset)\n    if (e.target.dataset.name && task.length === 0) {\n      console.log('task empty')\n      sibling.textContent = \"\";\n      (0,_taskDisplayNoTask__WEBPACK_IMPORTED_MODULE_0__.default)(sibling, e.target.textContent);\n    }\n    if(e.target.dataset.name && task.length !== 0 ){\n      sibling.textContent = \"\";\n      console.log(task)\n      const form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.default)(e.target.textContent)\n      form.id = e.target.textContent\n      sibling.append(form)\n      // task.map((item) => {\n      //   taskDisplayElements(sibling, item.title, item.description, item.date, item.priority, item.done);\n      // });\n      // taskDisplayNoTask(element, e.target.textContent);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/clickDisplayTask.js?");

/***/ }),

/***/ "./src/assets/displayProject.js":
/*!**************************************!*\
  !*** ./src/assets/displayProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n\n\nconst checkProject = (name) => {\n  if(name.indexOf(' ')) {\n    return name.replace(\" \", \"_\")\n  } else {\n    return name\n  }\n}\n\n\nconst displayProject = (element) => {\n  const containerProject = document.querySelector('#my-projects')\n  const projValue = checkProject(element)\n  const project = document.createElement('p');\n  project.dataset.name = projValue;\n  const nameStore = 'projects';\n  (0,_addToLocal__WEBPACK_IMPORTED_MODULE_0__.default)(nameStore, projValue);\n  project.textContent = element;\n  containerProject.append(project);\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/displayProject.js?");

/***/ }),

/***/ "./src/assets/formNewProject.js":
/*!**************************************!*\
  !*** ./src/assets/formNewProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formProject)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n\n\nconst displayNewProject = (element) => {\n  element.addEventListener('click', (e) => {\n    const input = e.target.previousElementSibling;\n    if (e.target.id === 'lol') {\n      if (input.value) {\n        (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(input.value)\n        input.value = \"\";\n      }\n    }\n  });\n};\n\nconst formProject = (element,myProject) => {\n  const containerInput = document.createElement('div')\n  const input = document.createElement('INPUT');\n  const button = document.createElement('button');\n  button.textContent = 'Add project';\n  button.id = 'lol';\n  input.id = 'project';\n  containerInput.id = 'form-addProj';\n  containerInput.classList.add('cont-newproject');\n  containerInput.append(input);\n  containerInput.append(button);\n  element.append(containerInput);\n  displayNewProject(containerInput, myProject)\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/formNewProject.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _formNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formNewProject */ \"./src/assets/formNewProject.js\");\n/* harmony import */ var _projectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectAll */ \"./src/assets/projectAll.js\");\n/* harmony import */ var _clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickDisplayTask */ \"./src/assets/clickDisplayTask.js\");\n\n\n\n\nconst init = () => {\n  const containerProjects = document.querySelector('#my-projects')\n  const containerTasks = document.querySelector('#cont')\n  const addProjectBtn = document.querySelector('#addProj')\n  ;(0,_projectAll__WEBPACK_IMPORTED_MODULE_1__.default)()\n  ;(0,_formNewProject__WEBPACK_IMPORTED_MODULE_0__.default)(addProjectBtn)\n  ;(0,_clickDisplayTask__WEBPACK_IMPORTED_MODULE_2__.default)(containerProjects, containerTasks)\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/assets/init.js?");

/***/ }),

/***/ "./src/assets/projectAll.js":
/*!**********************************!*\
  !*** ./src/assets/projectAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/assets/displayProject.js\");\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\n\nconst projects = () => {\n  const nameStore = 'projects';\n  const proj = (0,_getLocal__WEBPACK_IMPORTED_MODULE_1__.default)(nameStore);\n  proj.map((item) => (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.default)(item));\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/projectAll.js?");

/***/ }),

/***/ "./src/assets/taskCreateNew.js":
/*!*************************************!*\
  !*** ./src/assets/taskCreateNew.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNewTask)\n/* harmony export */ });\n/* harmony import */ var _taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskCreatorClass */ \"./src/assets/taskCreatorClass.js\");\n/* harmony import */ var _addToLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToLocal */ \"./src/assets/addToLocal.js\");\n/* harmony import */ var _taskInLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskInLocal */ \"./src/assets/taskInLocal.js\");\n/* harmony import */ var _taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskDisplayElements */ \"./src/assets/taskDisplayElements.js\");\n\n\n\n\n\nconst getValueFormTask = () => {\n  const title = document.querySelector('#title').value;\n  const description = document.querySelector('#description').value;\n  const date = document.querySelector('#date').value;\n  const priority = document.querySelector('#priority').value;\n  const project = document.getElementById('hiden').value;\n\n  return [project, title, description, date, priority];\n};\n\n// const taskMap = () => {\n//   const tasdArr = getLocalProject('task');\n\n// }\n\nconst createNewTask = () => {\n  const element = document.forms[0];\n  const projName = element.id\n\n  element.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const parent = element.parentElement\n    const valuesTask = getValueFormTask();\n    const task = (0,_taskCreatorClass__WEBPACK_IMPORTED_MODULE_0__.default)(...valuesTask);\n    (0,_addToLocal__WEBPACK_IMPORTED_MODULE_1__.default)(...task);\n    const projectArr = (0,_taskInLocal__WEBPACK_IMPORTED_MODULE_2__.default)(projName)\n    // parent.append(element)\n    projectArr.map((item) => {\n      ;(0,_taskDisplayElements__WEBPACK_IMPORTED_MODULE_3__.default)(parent, item.title, item.description, item.date, item.priority, item.done);\n    });\n    // element.reset();\n  });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskCreateNew.js?");

/***/ }),

/***/ "./src/assets/taskCreatorClass.js":
/*!****************************************!*\
  !*** ./src/assets/taskCreatorClass.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskGenerator)\n/* harmony export */ });\nclass TaskCreator {\n  constructor(project, title, description, date, priority) {\n    this.project = project;\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority\n    this.done = false;\n  }\n}\n\nconst taskGenerator = (project, title, description, date, priority) => {\n  const theTask = new TaskCreator(project, title, description, date, priority);\n  const nameStore = 'task';\n  return [nameStore, theTask];\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskCreatorClass.js?");

/***/ }),

/***/ "./src/assets/taskDisplayElements.js":
/*!*******************************************!*\
  !*** ./src/assets/taskDisplayElements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayElements)\n/* harmony export */ });\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm */ \"./src/assets/taskForm.js\");\n/* harmony import */ var _taskCreateNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCreateNew */ \"./src/assets/taskCreateNew.js\");\n\n\n// import { createNewTask, markAsDone, getOneTask } from './eventsClick';\n\n// const checkForExist = (form, value, container, containerTask, brother, containerContent, ulElement) => {\n//   const check = document.querySelector('#cont');\n//   const formCheck = document.querySelector(`#${value}`);\n//   if (check && formCheck) {\n//     containerContent.append(ulElement);\n\n//     check.append(containerContent);\n//   } else {\n//     containerContent.append(ulElement);\n//     container.append(form);\n//     containerTask.append(container);\n//     containerTask.append(containerContent);\n//     brother.insertAdjacentElement('afterend', containerTask);\n//   }\n// };\n\n// const addClassInDoneElement = (lititle, lidesc, lidate, lidone, title) => {\n//   if (lidone.textContent === `Task ${title} is done`) {\n//     lititle.classList.add('task-done');\n//     lidesc.classList.add('task-done');\n//     lidate.classList.add('task-done');\n//   }\n// };\n\nconst isDone = (done, title) => {\n  if (!done) {\n    return `Mark ${title} as done`;\n  }\n  return `Task ${title} is done`;\n};\n\n\nconst taskDisplayElements = (parent, title, description, date, priority, done) => {\n  // const containerTask = document.createElement('div');\n  const container = document.createElement('div');\n  const containerContent = document.createElement('div');\n\n  // const form = taskForm(value);\n  // containerTask.id = 'cont';\n  // form.id = value;\n  const ulElement = document.createElement('ul');\n  const liTitle = document.createElement('li');\n  const liDescription = document.createElement('li');\n  const liDate = document.createElement('li');\n  const liPrio = document.createElement('li');\n  const liDone = document.createElement('li');\n\n  const textDone = isDone(done, title);\n  liDone.textContent = textDone;\n  liTitle.textContent = title;\n  liDescription.textContent = description;\n  liDate.textContent = date;\n  liPrio.textContent = priority;\n  // addClassInDoneElement(liTitle, liDescription, liDate, liDone, title);\n  container.classList.add('cont-form');\n  containerContent.classList.add('task');\n\n\n  ulElement.classList.add('task-list');\n  ulElement.append(liTitle);\n  ulElement.append(liDescription);\n  ulElement.append(liDate);\n  ulElement.append(liPrio);\n  ulElement.append(liDone);\n\n  containerContent.append(ulElement);\n  // container.append(form);\n  // parent.append(container);\n  parent.append(containerContent);\n\n\n  // checkForExist(form, value, container, containerTask, brother, containerContent, ulElement);\n  // createNewTask(form);\n  // markAsDone(liDone);\n  // getOneTask(containerContent, liTitle);\n};\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayElements.js?");

/***/ }),

/***/ "./src/assets/taskDisplayNoTask.js":
/*!*****************************************!*\
  !*** ./src/assets/taskDisplayNoTask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDisplayNoTask)\n/* harmony export */ });\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm */ \"./src/assets/taskForm.js\");\n/* harmony import */ var _taskCreateNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCreateNew */ \"./src/assets/taskCreateNew.js\");\n\n\nconst taskDisplayNoTask = (taskContainer, value) => {\n  const container = document.createElement('div');\n  const containerContent = document.createElement('div');\n  const notask = document.createElement('h1');\n  const form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_0__.default)(value);\n  container.classList.add('cont-form');\n  form.id = value;\n  notask.id = 'notask';\n  notask.textContent = `Your project ${value} dont have tasks`;\n  containerContent.classList.add('task');\n  containerContent.append(notask);\n  container.append(form);\n  taskContainer.append(container);\n  taskContainer.append(containerContent);\n  (0,_taskCreateNew__WEBPACK_IMPORTED_MODULE_1__.default)()\n};\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskDisplayNoTask.js?");

/***/ }),

/***/ "./src/assets/taskForm.js":
/*!********************************!*\
  !*** ./src/assets/taskForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskForm)\n/* harmony export */ });\n\nconst taskForm = (hiden) => {\n  const form = document.createElement('form');\n  const labelTitle = document.createElement('label');\n  const inputT = document.createElement('input');\n  const labelDesc = document.createElement('label');\n  const inputDescription = document.createElement('input');\n  const labelDueDate = document.createElement('label');\n  const inputDueDate = document.createElement('input');\n  const labelPrio = document.createElement('label');\n  const inputPrio = document.createElement('select');\n  const important = document.createElement('option');\n  const normal = document.createElement('option');\n  const low = document.createElement('option');\n  const hidenInput = document.createElement('input');\n  const sub = document.createElement('button');\n  const divT = document.createElement('div');\n  const divD = document.createElement('div');\n  const divDa = document.createElement('div');\n  const divP = document.createElement('div');\n\n  important.textContent = 'Important';\n  normal.textContent = 'Normal';\n  low.textContent = 'Low';\n  labelPrio.textContent = 'Select the priority';\n  inputPrio.append(important);\n  inputPrio.append(normal);\n  inputPrio.append(low);\n\n  hidenInput.name = 'task';\n  inputT.id = 'title';\n  inputDescription.id = 'description';\n  inputDueDate.id = 'date';\n  hidenInput.id = 'hiden';\n  inputPrio.id = 'priority';\n  labelTitle.textContent = 'What you gonna do?';\n  labelDesc.textContent = 'How you gonna do it?';\n  labelDueDate.textContent = 'When it must be done?';\n  inputDueDate.setAttribute('type', 'date');\n  hidenInput.setAttribute('type', 'hidden');\n  hidenInput.setAttribute('value', hiden);\n  sub.setAttribute('type', 'submit');\n  sub.textContent = 'Add new task';\n\n  divT.classList.add('cont-ftitle');\n  divD.classList.add('cont-fdesc');\n  divDa.classList.add('cont-fdate');\n  divP.classList.add('cont-fprio');\n  sub.classList.add('cont-fbuton');\n\n  divP.append(labelPrio);\n  divP.append(inputPrio);\n  divT.append(labelTitle);\n  divT.append(inputT);\n  divD.append(labelDesc);\n  divD.append(inputDescription);\n  divDa.append(labelDueDate);\n  divDa.append(inputDueDate);\n  form.append(divT);\n  form.append(divD);\n  form.append(divDa);\n  form.append(divP)\n  form.append(sub);\n  form.append(hidenInput);\n  return form;\n};\n\n\n//# sourceURL=webpack://todo/./src/assets/taskForm.js?");

/***/ }),

/***/ "./src/assets/taskInLocal.js":
/*!***********************************!*\
  !*** ./src/assets/taskInLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskInLocal)\n/* harmony export */ });\n/* harmony import */ var _getLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLocal */ \"./src/assets/getLocal.js\");\n\n\nconst taskInLocal = (titleProject) => {\n  const result = (0,_getLocal__WEBPACK_IMPORTED_MODULE_0__.default)('task');\n  const task = result.filter((item) => {\n    if (item.project === titleProject) {\n      return true;\n    }\n    return false;\n  });\n  return task;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/assets/taskInLocal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _assets_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/init */ \"./src/assets/init.js\");\n\n\n\n(0,_assets_init__WEBPACK_IMPORTED_MODULE_1__.default)()\n\n//# sourceURL=webpack://todo/./src/index.js?");

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