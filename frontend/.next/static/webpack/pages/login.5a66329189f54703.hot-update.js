"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/Form/LoginForm.js":
/*!**************************************!*\
  !*** ./components/Form/LoginForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar LoginForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), email = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), password = ref1[0], setPassword = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"w-9/10 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                class: \"text-2xl\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                class: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                class: \"block text-gray-700 text-sm font-bold mb-2\",\n                                for: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 14,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"username\",\n                                type: \"text\",\n                                placeholder: \"Username\",\n                                on: true\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 17,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                class: \"block text-gray-700 text-sm font-bold mb-2\",\n                                for: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 20,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"password\",\n                                type: \"password\",\n                                placeholder: \"******************\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-red-500 text-xs italic\",\n                                children: \"Please type in the correct username or password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex items-center justify-between mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                class: \"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800\",\n                                href: \"#\",\n                                children: \"Forgot Password?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/register\",\n                        class: \"text-blue-500 text-xs\",\n                        children: \"Don't have an account? Register here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoginForm, \"4eLOaIE0Yl15ohhrrvSgicSmGzk=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vTG9naW5Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFxQztBQUVyQyxJQUFNRSxTQUFTLEdBQUcsV0FBTTs7SUFFdEIsSUFBNkJELEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUFoQ0UsS0FBSyxHQUFpQkYsR0FBVSxHQUEzQixFQUFFRyxXQUFXLEdBQUlILEdBQVUsR0FBZDtJQUN6QixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixJQUFVLEdBQTNCLEVBQUVLLFdBQVcsR0FBSUwsSUFBVSxHQUFkO0lBRTVCLHFCQUNFLDhEQUFDTSxLQUFHO1FBQUNDLEtBQUssRUFBQyxnQkFBZ0I7OzBCQUN6Qiw4REFBQ0MsSUFBRTtnQkFBQ0QsS0FBSyxFQUFDLFVBQVU7MEJBQUMsT0FBSzs7Ozs7cUJBQUs7MEJBQy9CLDhEQUFDRSxJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDQyxNQUFJO2dCQUFDSCxLQUFLLEVBQUMsZ0RBQWdEOztrQ0FDMUQsOERBQUNELEtBQUc7d0JBQUNDLEtBQUssRUFBQyxNQUFNOzswQ0FDakIsOERBQUNJLE9BQUs7Z0NBQUNKLEtBQUssRUFBQyw0Q0FBNEM7Z0NBQUNLLEdBQUcsRUFBQyxVQUFVOzBDQUFDLFVBRXpFOzs7OztxQ0FBUTswQ0FDUiw4REFBQ0MsT0FBSztnQ0FBQ04sS0FBSyxFQUFDLHFJQUFxSTtnQ0FBQ08sRUFBRSxFQUFDLFVBQVU7Z0NBQUNDLElBQUksRUFBQyxNQUFNO2dDQUFDQyxXQUFXLEVBQUMsVUFBVTtnQ0FBQ0MsRUFBRTs7Ozs7cUNBQUU7Ozs7Ozs2QkFDbE07a0NBQ04sOERBQUNYLEtBQUc7d0JBQUNDLEtBQUssRUFBQyxNQUFNOzswQ0FDakIsOERBQUNJLE9BQUs7Z0NBQUNKLEtBQUssRUFBQyw0Q0FBNEM7Z0NBQUNLLEdBQUcsRUFBQyxVQUFVOzBDQUFDLFVBRXpFOzs7OztxQ0FBUTswQ0FDUiw4REFBQ0MsT0FBSztnQ0FBQ04sS0FBSyxFQUFDLDBJQUEwSTtnQ0FBQ08sRUFBRSxFQUFDLFVBQVU7Z0NBQUNDLElBQUksRUFBQyxVQUFVO2dDQUFDQyxXQUFXLEVBQUMsb0JBQW9COzs7OztxQ0FBRzswQ0FDek4sOERBQUNFLEdBQUM7Z0NBQUNYLEtBQUssRUFBQyw2QkFBNkI7MENBQUMsaURBQStDOzs7OztxQ0FBSTs7Ozs7OzZCQUNwRjtrQ0FDTiw4REFBQ0QsS0FBRzt3QkFBQ0MsS0FBSyxFQUFDLHdDQUF3Qzs7MENBQy9DLDhEQUFDWSxRQUFNO2dDQUFDWixLQUFLLEVBQUMsOEdBQThHO2dDQUFDUSxJQUFJLEVBQUMsUUFBUTswQ0FBQyxTQUUzSTs7Ozs7cUNBQVM7MENBQ1QsOERBQUNLLEdBQUM7Z0NBQUNiLEtBQUssRUFBQyxpRkFBaUY7Z0NBQUNjLElBQUksRUFBQyxHQUFHOzBDQUFDLGtCQUVwRzs7Ozs7cUNBQUk7Ozs7Ozs2QkFDRjtrQ0FDTiw4REFBQ0QsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLFdBQVc7d0JBQUNkLEtBQUssRUFBQyx1QkFBdUI7a0NBQUMsc0NBQW9DOzs7Ozs2QkFBSTs7Ozs7O3FCQUN2Rjs7Ozs7O2FBQ0QsQ0FDUDtDQUNGO0dBbkNLTixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUFxQ2YsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL0xvZ2luRm9ybS5qcz8yNTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtlbWFpbCwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInctOS8xMCBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTJ4bFwiPkxvZ2luPC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGZvcm0gY2xhc3M9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBiZy13aGl0ZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBvbi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNlwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYmctd2hpdGUgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqKioqKioqKlwiIC8+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQteHMgaXRhbGljXCI+UGxlYXNlIHR5cGUgaW4gdGhlIGNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImlubGluZS1ibG9jayBhbGlnbi1iYXNlbGluZSBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS04MDBcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0ZXJcIiBjbGFzcz1cInRleHQtYmx1ZS01MDAgdGV4dC14c1wiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXIgaGVyZTwvYT5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpdiIsImNsYXNzIiwiaDEiLCJiciIsImZvcm0iLCJsYWJlbCIsImZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbiIsInAiLCJidXR0b24iLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/LoginForm.js\n"));

/***/ })

});