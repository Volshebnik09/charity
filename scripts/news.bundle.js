!function(){"use strict";var __webpack_modules__={"../src/pages/news/news.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_news_news_news_news_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sections/news__news/news__news.js */ "../src/sections/news__news/news__news.js");\n/* harmony import */ var _sections_news_MM_news_MM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sections/news__MM/news__MM.js */ "../src/sections/news__MM/news__MM.js");\n\n\n(0,_sections_news_news_news_news_js__WEBPACK_IMPORTED_MODULE_0__["default"])();\n(0,_sections_news_MM_news_MM_js__WEBPACK_IMPORTED_MODULE_1__["default"])();\n\n//# sourceURL=webpack:///../src/pages/news/news.js?')},"../src/sections/news__MM/news__MM.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ \"../node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ \"../node_modules/swiper/modules/navigation/navigation.min.css\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper('.news__MM__swiper', {\n    slidesPerView: 'auto',\n    spaceBetween: 25,\n    speed: 700,\n    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],\n    centeredSlides: true,\n    centeredSlidesBounds: true,\n    navigation: {\n      nextEl: '.news__MM__swiper-button-next',\n      prevEl: '.news__MM__swiper-button-prev'\n    }\n  });\n  var curPage = 0;\n  var contents = document.querySelectorAll('.news__MM__swiper-content');\n  var slides = document.querySelectorAll('.news__MM__swiper .swiper-slide');\n\n  swiper.navigation.prevEl.onclick = function () {\n    updatePage(curPage - 1);\n  };\n\n  swiper.navigation.nextEl.onclick = function () {\n    updatePage(curPage + 1);\n  };\n\n  var updatePage = function updatePage(page) {\n    if (page < 0) return;\n    if (page >= contents.length) return;\n\n    for (var i = 0; i < contents.length; i++) {\n      contents[i].classList.remove('active');\n      slides[i].classList.remove('active');\n    }\n\n    curPage = page;\n    contents[curPage].classList.add('active');\n    slides[curPage].classList.add('active');\n    swiper.slideTo(curPage);\n  };\n\n  swiper.on('click', function (e) {\n    if (e.clickedIndex === undefined) return;\n    updatePage(e.clickedIndex);\n  });\n});\n\n//# sourceURL=webpack:///../src/sections/news__MM/news__MM.js?")},"../src/sections/news__news/news__news.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ \"../node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ \"../node_modules/swiper/modules/navigation/navigation.min.css\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.Swiper('.news__news__swiper', {\n    slidesPerView: 'auto',\n    spaceBetween: 20,\n    speed: 700,\n    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],\n    centeredSlides: true,\n    centeredSlidesBounds: true,\n    navigation: {\n      nextEl: '.news__news__swiper-button-next',\n      prevEl: '.news__news__swiper-button-prev'\n    }\n  });\n  swiper.on('click', function (e) {// if (e.clickedIndex === undefined) return\n    // swiper.slideTo(e.clickedIndex)\n    //\n    // for (let i = 0; i < e.wrapperEl.children.length; i++) {\n    //     e.wrapperEl.children[i].classList.remove('active');\n    // }\n    // let contents = document.querySelectorAll('.index__stages__swiper-content');\n    //\n    // for (let i = 0; i < contents.length; i++) {\n    //     contents[i].classList.remove('active');\n    // }\n    // e.wrapperEl.children[e.clickedIndex].classList.add('active')\n    // contents[e.clickedIndex].classList.add('active');\n  });\n  var categories = document.querySelectorAll('.news__news__categories__category');\n  var swiperWrapper = document.querySelector('.news__news__swiper .swiper-wrapper');\n  swiperWrapper.setAttribute('cat', 0);\n\n  var _loop = function _loop(i) {\n    categories[i].addEventListener('click', function (e) {\n      categories.forEach(function (category) {\n        category.classList.remove('active');\n      });\n      categories[i].classList.add('active');\n      swiperWrapper.setAttribute('cat', i);\n      swiper.update();\n    });\n  };\n\n  for (var i = 0; i < categories.length; i++) {\n    _loop(i);\n  }\n\n  swiper.update();\n});\n\n//# sourceURL=webpack:///../src/sections/news__news/news__news.js?")},"data:application/font-woff;charset=utf-8;base64, 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":function(module){eval('module.exports = "data:application/font-woff;charset=utf-8;base64, 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";\n\n//# sourceURL=webpack:///data:application/font-woff;charset=utf-8;base64,_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?')}},__webpack_module_cache__={},deferred;function __webpack_require__(A){var e=__webpack_module_cache__[A];if(void 0!==e)return e.exports;var _=__webpack_module_cache__[A]={id:A,exports:{}};return __webpack_modules__[A](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(A,e,_,n){if(!e){var r=1/0;for(a=0;a<deferred.length;a++){e=deferred[a][0],_=deferred[a][1],n=deferred[a][2];for(var s=!0,i=0;i<e.length;i++)(!1&n||r>=n)&&Object.keys(__webpack_require__.O).every(function(A){return __webpack_require__.O[A](e[i])})?e.splice(i--,1):(s=!1,n<r&&(r=n));if(s){deferred.splice(a--,1);var c=_();void 0!==c&&(A=c)}}return A}n=n||0;for(var a=deferred.length;a>0&&deferred[a-1][2]>n;a--)deferred[a]=deferred[a-1];deferred[a]=[e,_,n]},__webpack_require__.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=function(A,e){for(var _ in e)__webpack_require__.o(e,_)&&!__webpack_require__.o(A,_)&&Object.defineProperty(A,_,{enumerable:!0,get:e[_]})},__webpack_require__.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},__webpack_require__.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},function(){__webpack_require__.b=document.baseURI||self.location.href;var A={news:0};__webpack_require__.O.j=function(e){return 0===A[e]};var e=function(e,_){var n,r,s=_[0],i=_[1],c=_[2],a=0;if(s.some(function(e){return 0!==A[e]})){for(n in i)__webpack_require__.o(i,n)&&(__webpack_require__.m[n]=i[n]);if(c)var t=c(__webpack_require__)}for(e&&e(_);a<s.length;a++)r=s[a],__webpack_require__.o(A,r)&&A[r]&&A[r][0](),A[r]=0;return __webpack_require__.O(t)},_=self.webpackChunk=self.webpackChunk||[];_.forEach(e.bind(null,0)),_.push=e.bind(null,_.push.bind(_))}(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__.O(void 0,["vendors"],function(){return __webpack_require__("../src/pages/news/news.js")});__webpack_exports__=__webpack_require__.O(__webpack_exports__)}();