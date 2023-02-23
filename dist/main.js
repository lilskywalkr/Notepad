/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("if ('serviceWorker' in navigator) {\r\n    navigator.serviceWorker.register('/sw.js')\r\n      .then((reg) => console.log('service worker registered', reg))\r\n      .catch((err) => console.log('service worker not registered', err));\r\n  }\n\n//# sourceURL=webpack://notepad/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n// Declaring necessary variables\r\nconst newNoteButton = document.querySelector('.text-container button');\r\nconst noteField = document.querySelector('.text-container input[type=\"text\"]');\r\nconst container = document.querySelector('.result-container');\r\nconsole.log(\"Made by Ronnie.. yeyyyy\");\r\n// localStorage.clear()\r\n\r\n// Removes the chosen note\r\nfunction removeNote(e) {\r\n  const target = e.target;\r\n  if (target.classList.contains('delete') || target.classList.contains('fa-times')) {\r\n\r\n    // initialazing note variable appropriately to the clicked object's className\r\n    let note;\r\n    if (target.classList.contains('delete')) {\r\n      note = target.parentNode.parentNode\r\n    } else {\r\n      note = target.parentNode.parentNode.parentNode;\r\n    }\r\n\r\n    let temp = []\r\n    let id = Number(note.id);\r\n    for (let i = 0; i < localStorage.length; i++) {\r\n      if (i != id) {\r\n        temp.push(localStorage.getItem(i));\r\n      }\r\n    }\r\n\r\n    localStorage.removeItem(id);\r\n    note.parentNode.removeChild(note);\r\n\r\n    console.log(temp);\r\n    localStorage.clear();\r\n\r\n    for (let i = 0; i < temp.length; i++) {\r\n      localStorage.setItem(i, temp[i]);\r\n    }\r\n\r\n    // if there's no notes then the message pops up\r\n    if (container.childElementCount === 1) {\r\n      document.querySelector('.no-notes').style.transform = 'translate(-50%, -50%) scale(1)';\r\n    }\r\n\r\n      // if the clicked element is the \"done\" button then the color of the font and background changes\r\n  } else if (target.classList.contains('done') || target.classList.contains('fa-check')) {\r\n\r\n    // initialazing note variable appropriately to the clicked object's className\r\n    let note;\r\n    if (target.classList.contains('done')) note = target.parentNode.parentNode;\r\n    else note = target.parentNode.parentNode.parentNode;\r\n\r\n    if (note.style.backgroundColor) {\r\n      note.style.backgroundColor = null;\r\n      note.style.color = null;\r\n    } else {\r\n      note.style.backgroundColor = 'rgb(46, 204, 113)';\r\n      note.style.color = 'rgb(255, 255, 255)';\r\n    }\r\n  }\r\n}\r\n\r\n// Adds a new note\r\nfunction newNote(noteID, option) {\r\n\r\n  // Creating new DOM elements - note, button container, delete button\r\n  const note = document.createElement('div');\r\n  const btns = document.createElement('div');\r\n  const deleteButton = document.createElement('div');\r\n  const doneButton = document.createElement('div');\r\n\r\n  const deleteSign = document.createElement('i');\r\n  const doneSign = document.createElement('i');\r\n  const paragraph = document.createElement('p');\r\n\r\n  // setting appropriate class atributes to the elements\r\n  note.className = 'note';\r\n  note.id = noteID;\r\n\r\n  btns.className = 'btns';\r\n  deleteButton.classList.add('btn', 'delete');\r\n  doneButton.classList.add('btn', 'done');\r\n\r\n  doneSign.classList.add('fas', 'fa-check');\r\n  deleteSign.classList.add('fas', 'fa-times');\r\n\r\n  // passing new data to the database (pffff database) and inserting it to the <p> DOM object and displaying it\r\n  if (option === 0) {\r\n    paragraph.textContent = localStorage.getItem(noteID);\r\n  } else {\r\n    localStorage.setItem(noteID, noteField.value);\r\n    paragraph.textContent = localStorage.getItem(noteID);\r\n  }\r\n\r\n  // appending child nodes into their parent nodes\r\n  doneButton.appendChild(doneSign);\r\n  deleteButton.appendChild(deleteSign);\r\n\r\n  btns.appendChild(doneButton);\r\n  btns.appendChild(deleteButton);\r\n  note.appendChild(btns);\r\n  note.appendChild(paragraph);\r\n\r\n  container.appendChild(note);\r\n\r\n  // The message which says about the number of your notes - disappears\r\n  document.querySelector('.no-notes').style.transform = 'translate(-50%, -50%) scale(0)';\r\n}\r\n\r\n// check if the notes exist - if so then display them on the screen\r\nfunction checkNote() {\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    if (localStorage.getItem(i) !== '') {\r\n      newNote(i, 0);\r\n    }\r\n  }\r\n}\r\n\r\n// setting down event listeners\r\nwindow.addEventListener('load', checkNote, false);\r\n\r\ncontainer.addEventListener('click', removeNote, false);\r\nnewNoteButton.addEventListener('click', function() {\r\n\r\n  // checks if the value of the field is not empty\r\n  if (!!noteField.value)\r\n    newNote(localStorage.length, 1)\r\n    noteField.value = '';\r\n}, false);\n\n//# sourceURL=webpack://notepad/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;