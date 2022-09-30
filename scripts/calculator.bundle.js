!function(){var __webpack_modules__={"../src/pages/calculator/calculator.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval('__webpack_require__(/*! ../../sections/calculator__calculator/calculator__calculator */ "../src/sections/calculator__calculator/calculator__calculator.js");\n\n//# sourceURL=webpack:///../src/pages/calculator/calculator.js?')},"../src/sections/calculator__calculator/calculator__calculator.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval("(function () {\n  var chooseBtns = document.querySelectorAll('.calculator__calculator__choose__btn');\n  var blocks = document.querySelectorAll('.calculator__calculator__grid__left-side__block');\n  var totalV = document.querySelector('#totalValue');\n  var totalA = document.querySelector('#totalAmount');\n  var options = document.querySelectorAll('.calculator__calculator__grid__left-side__block__option');\n  var checkboxes = document.querySelectorAll('.calculator__calculator__grid input');\n  var program = 'individual';\n\n  var calculate = function calculate() {\n    var totalValue = 0;\n    var totalAmount = 0;\n    blocks.forEach(function (block) {\n      var options = block.querySelectorAll('.calculator__calculator__grid__left-side__block__option');\n      options.forEach(function (option) {\n        var inp = option.querySelector('input');\n\n        if (inp.checked) {\n          totalValue += parseFloat(inp.value);\n          totalAmount += 1;\n        }\n      });\n    });\n    totalV.innerHTML = Math.round(totalValue * 100) / 100 + ' руб.';\n    totalA.innerHTML = totalAmount;\n  };\n\n  var switchPrices = function switchPrices(price) {\n    options.forEach(function (option) {\n      var input = option.querySelector('input');\n      var priceHtml = option.querySelector('.calculator__calculator__grid__left-side__block__option__price');\n\n      if (price === 'individual') {\n        var cur = priceHtml.dataset.price;\n        priceHtml.innerHTML = cur + ' руб.';\n        input.value = cur;\n      } else if (price === 'paid') {\n        var _cur = priceHtml.dataset.anotherprice;\n\n        if (!!_cur) {\n          priceHtml.innerHTML = _cur + ' руб.';\n          input.value = _cur;\n        }\n      }\n    });\n  };\n\n  switchPrices('individual');\n  chooseBtns[1].classList.add('active');\n  calculate();\n  chooseBtns.forEach(function (btn) {\n    btn.addEventListener(\"click\", function () {\n      if (btn.classList.contains('active')) {\n        return;\n      }\n\n      chooseBtns.forEach(function (btn) {\n        btn.classList.remove('active');\n      });\n      btn.classList.add('active');\n      switchPrices(btn.dataset.key);\n      program = btn.dataset.key;\n      calculate();\n      document.querySelector('.calculator__calculator__grid__left-side-another').classList.toggle('active');\n      document.querySelector('.calculator__calculator__grid__right-side__calculation').classList.toggle('hidden');\n      document.querySelector('.calculator__calculator__grid__left-side').classList.toggle('active');\n    });\n  });\n  chooseBtns[0].addEventListener('click', function () {});\n  checkboxes.forEach(function (checkbox) {\n    checkbox.addEventListener('change', function () {\n      calculate();\n    });\n  });\n\n  var _template = __webpack_require__(/*! lodash/template */ \"../node_modules/lodash/template.js\");\n\n  var printTable = function printTable() {\n    var printWindow = window.open('', '', 'width=500, height=700');\n\n    var table = _template(\" \\n            <table> \\n                <tr>\\n                    <th colspan=\\\"2\\\">    \\n                        \\u0412\\u044B\\u0431\\u0440\\u0430\\u043D\\u043D\\u044B\\u0435 \\u0443\\u0441\\u043B\\u0443\\u0433\\u0438, \\u043E\\u043A\\u0430\\u0437\\u044B\\u0432\\u0430\\u0435\\u043C\\u044B\\u0435 \\u043E\\u0442\\u0434\\u0435\\u043B\\u0435\\u043D\\u0438\\u044F\\u043C\\u0438 \\u0441\\u0435\\u0441\\u0442\\u0440\\u0438\\u043D\\u0441\\u043A\\u043E\\u0433\\u043E \\u0443\\u0445\\u043E\\u0434\\u0430 \\u0432 \\u0410\\u041D\\u041E \\xAB\\u041E\\u043F\\u0435\\u043A\\u0430\\xBB <br> <u>\\n<% if (program === 'individual') {%> \\u043F\\u043E \\u0438\\u043D\\u0434\\u0438\\u0432\\u0438\\u0434\\u0443\\u0430\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u0440\\u043E\\u0433\\u0440\\u0430\\u043C\\u043C\\u0435<%}%>\\n<% if (program === 'paid') {%> \\u041F\\u043E\\u043B\\u043D\\u043E\\u0441\\u0442\\u044C\\u044E \\u043D\\u0430 \\u043F\\u043B\\u0430\\u0442\\u043D\\u043E\\u0439 \\u043E\\u0441\\u043D\\u043E\\u0432\\u0435 <%}%>\\n</u> \\n                    </th>\\n                </tr> \\n                <%= header %>\\n                <% options.forEach( (option)=>{ %>\\n                    <tr>\\n                        <td>\\n                            <%= option.text %>\\n                        </td>\\n                        <td class=\\\"value\\\">\\n                            <%= option.value %> \\u0440\\u0443\\u0431.\\n                        </td>\\n                    </tr>\\n                <%})%>\\n                <tr>\\n                    <td colspan=\\\"2\\\">\\n                        \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0443\\u0441\\u043B\\u0443\\u0433:  <%= options.length %>\\n                    </td>\\n                </tr>\\n                <tr>\\n                    <td>\\u0421\\u0442\\u043E\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u0443\\u0441\\u043B\\u0443\\u0433:  </td>\\n                    <td>\\n                       <%= Math.round(options.reduce((acc, a) =>{return acc + parseFloat(a.value)},0)*100)/100 %> \\u0440\\u0443\\u0431.\\n                    </td>\\n                </tr>\\n            </table>\\n            <%= styles%>\\n            \");\n\n    var header = _template(\"\\n            <tr>\\n                <th>\\n                    \\u0423\\u0441\\u043B\\u0443\\u0433\\u0430\\n                </th>\\n                <th>\\n                    \\u0426\\u0435\\u043D\\u0430\\n                </th>\\n            </tr>\\n        \");\n\n    var styles = _template(\"\\n        <style>\\n            *{\\n                font-family: \\\"Times New Roman\\\", Times, serif;\\n                font-size:14px;\\n            }\\n            td{\\n                border: 1px solid black;\\n                width: 100%;\\n                padding: 5px;\\n                \\n            }\\n            th{\\n                border: 1px solid black;\\n                text-align: center;\\n                padding: 5px;\\n                font-size:16px;\\n            }\\n            table{                \\n                margin:0.5cm;\\n                border-spacing: 0;\\n            }\\n            .value{\\n                min-width: 150px;\\n            }\\n        </style>\\n        \");\n\n    var opt = [];\n    options.forEach(function (option) {\n      if (option.querySelector('input').checked) {\n        var opti = {\n          text: option.querySelector('.calculator__calculator__grid__left-side__block__option__text').innerHTML,\n          value: option.querySelector('input').value\n        };\n        opt.push(opti);\n      }\n    });\n    printWindow.document.write(table({\n      'header': header(),\n      options: opt,\n      'program': program,\n      styles: styles()\n    }));\n    printWindow.print();\n  };\n\n  document.querySelector('.calculator__calculator__grid__right-side__calculation__btn').addEventListener('click', function () {\n    printTable();\n  });\n})();\n\n//# sourceURL=webpack:///../src/sections/calculator__calculator/calculator__calculator.js?")}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var u=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e](u,u.exports,__webpack_require__),u.loaded=!0,u.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=function(e,n,u,t){if(!n){var r=1/0;for(o=0;o<deferred.length;o++){n=deferred[o][0],u=deferred[o][1],t=deferred[o][2];for(var c=!0,_=0;_<n.length;_++)(!1&t||r>=t)&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](n[_])})?n.splice(_--,1):(c=!1,t<r&&(r=t));if(c){deferred.splice(o--,1);var a=u();void 0!==a&&(e=a)}}return e}t=t||0;for(var o=deferred.length;o>0&&deferred[o-1][2]>t;o--)deferred[o]=deferred[o-1];deferred[o]=[n,u,t]},__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=function(e,n){for(var u in n)__webpack_require__.o(n,u)&&!__webpack_require__.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:n[u]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){__webpack_require__.b=document.baseURI||self.location.href;var e={calculator:0};__webpack_require__.O.j=function(n){return 0===e[n]};var n=function(n,u){var t,r,c=u[0],_=u[1],a=u[2],o=0;if(c.some(function(n){return 0!==e[n]})){for(t in _)__webpack_require__.o(_,t)&&(__webpack_require__.m[t]=_[t]);if(a)var l=a(__webpack_require__)}for(n&&n(u);o<c.length;o++)r=c[o],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(l)},u=self.webpackChunk=self.webpackChunk||[];u.forEach(n.bind(null,0)),u.push=n.bind(null,u.push.bind(u))}(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__.O(void 0,["vendors"],function(){return __webpack_require__("../src/pages/calculator/calculator.js")});__webpack_exports__=__webpack_require__.O(__webpack_exports__)}();