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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar LoginForm = function() {\n    var login = function login() {\n        console.log(email);\n        console.log(password);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), email = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isError = ref2[0], setIsError = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"w-9/10 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                class: \"text-2xl\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                class: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                class: \"block text-gray-700 text-sm font-bold mb-2\",\n                                for: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 20,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"username\",\n                                type: \"text\",\n                                placeholder: \"Username\",\n                                onChange: function(param) {\n                                    var target = param.target;\n                                    return setUsername(target === null || target === void 0 ? void 0 : target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                class: \"block text-gray-700 text-sm font-bold mb-2\",\n                                for: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                class: \"shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"password\",\n                                type: \"password\",\n                                placeholder: \"******************\",\n                                onChange: function(param) {\n                                    var target = param.target;\n                                    return setPassword(target === null || target === void 0 ? void 0 : target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex items-center justify-between mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                type: \"button\",\n                                onClick: function() {\n                                    return login();\n                                },\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                class: \"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800\",\n                                href: \"#\",\n                                children: \"Forgot Password?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-red-500 text-xs italic\",\n                        children: \"Please type in the correct username or password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/register\",\n                        class: \"text-blue-500 text-xs\",\n                        children: \"Don't have an account? Register here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/randallyeo/My Own Programming/Citibank/wealth-management-relation-workspace/frontend/components/Form/LoginForm.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoginForm, \"lHvkzUmx/LEfzV0zI9XkW1sTuFc=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vTG9naW5Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFxQztBQUVyQyxJQUFNRSxTQUFTLEdBQUcsV0FBTTtRQU1iQyxLQUFLLEdBQWQsU0FBU0EsS0FBSyxHQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUNuQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFFBQVEsQ0FBQztLQUN4Qjs7SUFQRCxJQUE2Qk4sR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQWhDSyxLQUFLLEdBQWlCTCxHQUFVLEdBQTNCLEVBQUVPLFdBQVcsR0FBSVAsR0FBVSxHQUFkO0lBQ3pCLElBQWdDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBbkNNLFFBQVEsR0FBaUJOLElBQVUsR0FBM0IsRUFBRVEsV0FBVyxHQUFJUixJQUFVLEdBQWQ7SUFDNUIsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENTLE9BQU8sR0FBZ0JULElBQWUsR0FBL0IsRUFBRVUsVUFBVSxHQUFJVixJQUFlLEdBQW5CO0lBTzFCLHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLEtBQUssRUFBQyxnQkFBZ0I7OzBCQUN6Qiw4REFBQ0MsSUFBRTtnQkFBQ0QsS0FBSyxFQUFDLFVBQVU7MEJBQUMsT0FBSzs7Ozs7cUJBQUs7MEJBQy9CLDhEQUFDRSxJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDQyxNQUFJO2dCQUFDSCxLQUFLLEVBQUMsZ0RBQWdEOztrQ0FDMUQsOERBQUNELEtBQUc7d0JBQUNDLEtBQUssRUFBQyxNQUFNOzswQ0FDakIsOERBQUNJLE9BQUs7Z0NBQUNKLEtBQUssRUFBQyw0Q0FBNEM7Z0NBQUNLLEdBQUcsRUFBQyxVQUFVOzBDQUFDLFVBRXpFOzs7OztxQ0FBUTswQ0FDUiw4REFBQ0MsT0FBSztnQ0FBQ04sS0FBSyxFQUFDLHFJQUFxSTtnQ0FBQ08sRUFBRSxFQUFDLFVBQVU7Z0NBQUNDLElBQUksRUFBQyxNQUFNO2dDQUFDQyxXQUFXLEVBQUMsVUFBVTtnQ0FBQ0MsUUFBUSxFQUFFO3dDQUFHQyxNQUFNLFNBQU5BLE1BQU07b0NBQU9oQixPQUFBQSxXQUFXLENBQUNnQixNQUFNLGFBQU5BLE1BQU0sV0FBTyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLE1BQU0sQ0FBRUMsS0FBSyxDQUFDO2lDQUFBOzs7OztxQ0FBSzs7Ozs7OzZCQUN2UDtrQ0FDTiw4REFBQ2IsS0FBRzt3QkFBQ0MsS0FBSyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0ksT0FBSztnQ0FBQ0osS0FBSyxFQUFDLDRDQUE0QztnQ0FBQ0ssR0FBRyxFQUFDLFVBQVU7MENBQUMsVUFFekU7Ozs7O3FDQUFROzBDQUNSLDhEQUFDQyxPQUFLO2dDQUFDTixLQUFLLEVBQUMsMElBQTBJO2dDQUFDTyxFQUFFLEVBQUMsVUFBVTtnQ0FBQ0MsSUFBSSxFQUFDLFVBQVU7Z0NBQUNDLFdBQVcsRUFBQyxvQkFBb0I7Z0NBQUNDLFFBQVEsRUFBRTt3Q0FBRUMsTUFBTSxTQUFOQSxNQUFNO29DQUFJZixPQUFBQSxXQUFXLENBQUNlLE1BQU0sYUFBTkEsTUFBTSxXQUFPLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsTUFBTSxDQUFFQyxLQUFLLENBQUM7aUNBQUE7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3JRO2tDQUNOLDhEQUFDYixLQUFHO3dCQUFDQyxLQUFLLEVBQUMsd0NBQXdDOzswQ0FDL0MsOERBQUNhLFFBQU07Z0NBQUNiLEtBQUssRUFBQyw4R0FBOEc7Z0NBQUNRLElBQUksRUFBQyxRQUFRO2dDQUFDTSxPQUFPLEVBQUc7MkNBQU14QixLQUFLLEVBQUU7aUNBQUE7MENBQUUsU0FFcEs7Ozs7O3FDQUFTOzBDQUNULDhEQUFDeUIsR0FBQztnQ0FBQ2YsS0FBSyxFQUFDLGlGQUFpRjtnQ0FBQ2dCLElBQUksRUFBQyxHQUFHOzBDQUFDLGtCQUVwRzs7Ozs7cUNBQUk7Ozs7Ozs2QkFDRjtvQkFDSm5CLE9BQU8saUJBQUcsOERBQUNvQixHQUFDO3dCQUFDakIsS0FBSyxFQUFDLDZCQUE2QjtrQ0FBQyxpREFBK0M7Ozs7OzZCQUFJLEdBQUcsRUFBRTtrQ0FDM0csOERBQUNlLEdBQUM7d0JBQUNDLElBQUksRUFBQyxXQUFXO3dCQUFDaEIsS0FBSyxFQUFDLHVCQUF1QjtrQ0FBQyxzQ0FBb0M7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3ZGOzs7Ozs7YUFDRCxDQUNQO0NBQ0Y7R0F6Q0tYLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQTJDZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vTG9naW5Gb3JtLmpzPzI1MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgY29uc3QgW2VtYWlsLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGxvZ2luKCl7XG4gICAgICBjb25zb2xlLmxvZyhlbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyhwYXNzd29yZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzcz1cInctOS8xMCBteC1hdXRvXCI+XG4gICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTJ4bFwiPkxvZ2luPC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGZvcm0gY2xhc3M9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBiZy13aGl0ZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBvbkNoYW5nZT17KCB7dGFyZ2V0fSApID0+IHNldFVzZXJuYW1lKHRhcmdldD8udmFsdWUpIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi02XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBiZy13aGl0ZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKioqKioqKioqXCIgb25DaGFuZ2U9eyh7dGFyZ2V0fSk9PnNldFBhc3N3b3JkKHRhcmdldD8udmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyAoKSA9PiBsb2dpbigpfT5cbiAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiaW5saW5lLWJsb2NrIGFsaWduLWJhc2VsaW5lIGZvbnQtYm9sZCB0ZXh0LXNtIHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkP1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyBpc0Vycm9yID8gPHAgY2xhc3M9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIj5QbGVhc2UgdHlwZSBpbiB0aGUgY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZDwvcD4gOiAnJ31cbiAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzPVwidGV4dC1ibHVlLTUwMCB0ZXh0LXhzXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlPC9hPlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRVc2VybmFtZSIsInNldFBhc3N3b3JkIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJkaXYiLCJjbGFzcyIsImgxIiwiYnIiLCJmb3JtIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhIiwiaHJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/LoginForm.js\n"));

/***/ })

});