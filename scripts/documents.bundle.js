!function(){var __webpack_modules__={"../src/pages/documents/documents.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval('__webpack_require__(/*! ../../sections/documents__documents/documents__documents */ "../src/sections/documents__documents/documents__documents.js");\n\n//# sourceURL=webpack:///../src/pages/documents/documents.js?')},"../src/sections/documents__documents/documents__documents.js":function(){eval("(function () {\n  var selectors = document.querySelectorAll('.documents__documents__selector');\n  var documentFrame = document.querySelector('.documents__documents__document');\n  selectors[0].classList.add('active');\n  documentFrame.src = selectors[0].dataset.src;\n  selectors.forEach(function (selector) {\n    selector.addEventListener('click', function () {\n      selectors.forEach(function (selector) {\n        selector.classList.remove('active');\n      });\n      selector.classList.add('active');\n      documentFrame.src = selector.dataset.src;\n      documentFrame.scrollIntoView();\n    });\n  });\n})();\n\n//# sourceURL=webpack:///../src/sections/documents__documents/documents__documents.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var c=__webpack_module_cache__[e];if(void 0!==c)return c.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](s,s.exports,__webpack_require__),s.exports}var __webpack_exports__=__webpack_require__("../src/pages/documents/documents.js")}();