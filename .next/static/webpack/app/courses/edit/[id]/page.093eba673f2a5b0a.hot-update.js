"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/edit/[id]/page",{

/***/ "(app-pages-browser)/./src/app/lib/components/editor.tsx":
/*!*******************************************!*\
  !*** ./src/app/lib/components/editor.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/actions/course-actions */ \"(app-pages-browser)/./src/app/lib/actions/course-actions.ts\");\n/* harmony import */ var _app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/components/image-picker */ \"(app-pages-browser)/./src/app/lib/components/image-picker.tsx\");\n/* __next_internal_client_entry_do_not_use__ Editor auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Editor = (props)=>{\n    _s();\n    const [formInfo, setFormInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: props.foundCourse.id,\n        name: props.foundCourse.name,\n        duration: props.foundCourse.duration,\n        price: props.foundCourse.price,\n        cover: props.foundCourse.cover\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormInfo({\n            ...formInfo,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-5\",\n                children: \"Edit Course\"\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"is-two-fifth my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        action: _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_2__.handleEdit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: formInfo.name,\n                                    className: \"input is-primary\",\n                                    name: \"name\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: props.foundCourse.duration,\n                                    className: \"input is-primary\",\n                                    name: \"duration\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: props.foundCourse.price,\n                                    className: \"input is-primary\",\n                                    name: \"price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_3__.ImagePicker, {}, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button is-danger\",\n                                    children: \"submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n        lineNumber: 27,\n        columnNumber: 14\n    }, undefined);\n};\n_s(Editor, \"sTpIW2iz5jqd1nhWIAB9dXvd4WY=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL2NvbXBvbmVudHMvZWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUd3RDtBQUNLO0FBQ0U7QUFJeEQsTUFBTUcsU0FBUSxDQUFDQzs7SUFHdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3JDTyxJQUFJSCxNQUFNSSxXQUFXLENBQUNELEVBQUU7UUFDeEJFLE1BQUtMLE1BQU1JLFdBQVcsQ0FBQ0MsSUFBSTtRQUMzQkMsVUFBVU4sTUFBTUksV0FBVyxDQUFDRSxRQUFRO1FBQ3BDQyxPQUFPUCxNQUFNSSxXQUFXLENBQUNHLEtBQUs7UUFDOUJDLE9BQU1SLE1BQU1JLFdBQVcsQ0FBQ0ksS0FBSztJQUNqQztJQUVBLE1BQU1DLGVBQWMsQ0FBQ0M7UUFFakIsTUFBTSxFQUFFTCxJQUFJLEVBQUVNLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDVixZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFFLENBQUNJLEtBQUssRUFBQ007UUFBSztJQUUxQztJQUNJLHFCQUFTLDhEQUFDRTs7WUFBSTswQkFBRSw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQVk7Ozs7OzswQkFDMUMsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNYLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDZiw0RUFBQ0M7d0JBQU1ELFdBQVU7d0JBQU1FLFFBQVFwQix1RUFBVUE7OzBDQUNyQyw4REFBQ2dCO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDRztvQ0FDREMsTUFBSztvQ0FDTFIsT0FBT1YsU0FBU0ksSUFBSTtvQ0FDcEJVLFdBQVU7b0NBQ1ZWLE1BQUs7b0NBQ0xlLFVBQVVYOzs7Ozs7Ozs7OzswQ0FJZCw4REFBQ0k7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNHO29DQUNEQyxNQUFLO29DQUNMUixPQUFPWCxNQUFNSSxXQUFXLENBQUNFLFFBQVE7b0NBQ2pDUyxXQUFVO29DQUNWVixNQUFLOzs7Ozs7Ozs7OzswQ0FJVCw4REFBQ1E7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNHO29DQUNEQyxNQUFLO29DQUNMUixPQUFPWCxNQUFNSSxXQUFXLENBQUNHLEtBQUs7b0NBQzlCUSxXQUFVO29DQUNWVixNQUFLOzs7Ozs7Ozs7OzswQ0FJVCw4REFBQ1E7Z0NBQUlFLFdBQVU7MENBQ1AsNEVBQUNqQix5RUFBV0E7Ozs7Ozs7Ozs7MENBRWhCLDhEQUFDZTtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ007b0NBQU9OLFdBQVU7OENBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekQsRUFBQztHQTdEWWhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGliL2NvbXBvbmVudHMvZWRpdG9yLnRzeD8yYzg5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IElDb3Vyc2UgfSBmcm9tIFwiLi4vYXBpXCI7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBoYW5kbGVFZGl0IH0gZnJvbSBcIkAvYXBwL2xpYi9hY3Rpb25zL2NvdXJzZS1hY3Rpb25zXCJcbmltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSBcIkAvYXBwL2xpYi9jb21wb25lbnRzL2ltYWdlLXBpY2tlclwiXG5cbmludGVyZmFjZSBJUHJvcHN7XG4gICAgZm91bmRDb3Vyc2U6SUNvdXJzZX1cbmV4cG9ydCBjb25zdCBFZGl0b3IgPShwcm9wczpJUHJvcHMpPT57XG5cblxuY29uc3QgW2Zvcm1JbmZvLCBzZXRGb3JtSW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgaWQ6IHByb3BzLmZvdW5kQ291cnNlLmlkLFxuICAgIG5hbWU6cHJvcHMuZm91bmRDb3Vyc2UubmFtZSxcbiAgICBkdXJhdGlvbjogcHJvcHMuZm91bmRDb3Vyc2UuZHVyYXRpb24sXG4gICAgcHJpY2U6IHByb3BzLmZvdW5kQ291cnNlLnByaWNlLFxuICAgIGNvdmVyOnByb3BzLmZvdW5kQ291cnNlLmNvdmVyXG59KVxuXG5jb25zdCBoYW5kbGVDaGFuZ2UgPShlOkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xuXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0Rm9ybUluZm8oey4uLmZvcm1JbmZvLCBbbmFtZV06dmFsdWV9IClcblxufVxuICAgIHJldHVybiAgIDxkaXY+ICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS01XCI+RWRpdCBDb3Vyc2U8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLXR3by1maWZ0aCBteS00XCI+XG4gICAgICAgIDxmb3JtICBjbGFzc05hbWU9XCJib3hcIiBhY3Rpb249e2hhbmRsZUVkaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUluZm8ubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmZvdW5kQ291cnNlLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmaWVsZCBteS00XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5mb3VuZENvdXJzZS5wcmljZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVBpY2tlci8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlclwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaGFuZGxlRWRpdCIsIkltYWdlUGlja2VyIiwiRWRpdG9yIiwicHJvcHMiLCJmb3JtSW5mbyIsInNldEZvcm1JbmZvIiwiaWQiLCJmb3VuZENvdXJzZSIsIm5hbWUiLCJkdXJhdGlvbiIsInByaWNlIiwiY292ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/components/editor.tsx\n"));

/***/ })

});