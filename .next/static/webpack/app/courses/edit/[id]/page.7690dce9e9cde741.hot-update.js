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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/components/image-picker */ \"(app-pages-browser)/./src/app/lib/components/image-picker.tsx\");\n/* __next_internal_client_entry_do_not_use__ Editor auto */ \nvar _s = $RefreshSig$();\n\n\nconst Editor = (props)=>{\n    _s();\n    const [formInfo, setFormInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: props.foundCourse.id,\n        name: props.foundCourse.name,\n        duration: props.foundCourse.duration,\n        price: props.foundCourse.price,\n        cover: props.foundCourse.cover\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormInfo({\n            ...formInfo,\n            [name]: value\n        });\n    };\n    const handleEdit = (data)=>{\n        console.log(\"sdljf\");\n        let updatedCourse = {\n            name: data.get(\"name\"),\n            duration: data.get(\"duration\"),\n            price: data.get(\"price\"),\n            cover: data.get(\"cover\"),\n            id: formInfo.id\n        };\n        console.log(updatedCourse);\n    //  updateCourse(updatedCourse)\n    // redirect('/')\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-5\",\n                children: \"Edit Course\"\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 46,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"is-two-fifth my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        action: handleEdit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: formInfo.name,\n                                    className: \"input is-primary\",\n                                    name: \"name\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: formInfo.duration,\n                                    className: \"input is-primary\",\n                                    name: \"duration\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: formInfo.price,\n                                    className: \"input is-primary\",\n                                    name: \"price\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__.ImagePicker, {}, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button is-danger\",\n                                    children: \"submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n        lineNumber: 46,\n        columnNumber: 14\n    }, undefined);\n};\n_s(Editor, \"sTpIW2iz5jqd1nhWIAB9dXvd4WY=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL2NvbXBvbmVudHMvZWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR3dEO0FBQ087QUFPeEQsTUFBTUUsU0FBUSxDQUFDQzs7SUFHdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxJQUFJSCxNQUFNSSxXQUFXLENBQUNELEVBQUU7UUFDeEJFLE1BQUtMLE1BQU1JLFdBQVcsQ0FBQ0MsSUFBSTtRQUMzQkMsVUFBVU4sTUFBTUksV0FBVyxDQUFDRSxRQUFRO1FBQ3BDQyxPQUFPUCxNQUFNSSxXQUFXLENBQUNHLEtBQUs7UUFDOUJDLE9BQU1SLE1BQU1JLFdBQVcsQ0FBQ0ksS0FBSztJQUNqQztJQUVBLE1BQU1DLGVBQWMsQ0FBQ0M7UUFFakIsTUFBTSxFQUFFTCxJQUFJLEVBQUVNLEtBQUssRUFBRSxHQUFHRCxFQUFFRSxNQUFNO1FBQ2hDVixZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFFLENBQUNJLEtBQUssRUFBQ007UUFBSztJQUUxQztJQUNDLE1BQU1FLGFBQVksQ0FBQ0M7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQztRQUVSLElBQUlDLGdCQUFlO1lBQ2ZaLE1BQU1TLEtBQUtJLEdBQUcsQ0FBQztZQUNmWixVQUFVUSxLQUFLSSxHQUFHLENBQUM7WUFDbkJYLE9BQU9PLEtBQUtJLEdBQUcsQ0FBQztZQUNoQlYsT0FBT00sS0FBS0ksR0FBRyxDQUFDO1lBQ2hCZixJQUFHRixTQUFTRSxFQUFFO1FBQ2xCO1FBQ0FZLFFBQVFDLEdBQUcsQ0FBQ0M7SUFHZCwrQkFBK0I7SUFDOUIsZ0JBQWdCO0lBQ25CO0lBRUkscUJBQVMsOERBQUNFOztZQUFJOzBCQUFFLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBWTs7Ozs7OzBCQUMxQyw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1gsNEVBQUNGO29CQUFJRSxXQUFVOzhCQUNmLDRFQUFDQzt3QkFBTUQsV0FBVTt3QkFBTUUsUUFBUVY7OzBDQUMzQiw4REFBQ007Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNHO29DQUNEQyxNQUFLO29DQUNMZCxPQUFPVixTQUFTSSxJQUFJO29DQUNwQmdCLFdBQVU7b0NBQ1ZoQixNQUFLO29DQUNMcUIsVUFBVWpCOzs7Ozs7Ozs7OzswQ0FJZCw4REFBQ1U7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNHO29DQUNEQyxNQUFLO29DQUNMZCxPQUFPVixTQUFTSyxRQUFRO29DQUN4QmUsV0FBVTtvQ0FDVmhCLE1BQUs7b0NBQ0xxQixVQUFVakI7Ozs7Ozs7Ozs7OzBDQUlkLDhEQUFDVTtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0c7b0NBQ0RDLE1BQUs7b0NBQ0xkLE9BQU9WLFNBQVNNLEtBQUs7b0NBQ3JCYyxXQUFVO29DQUNWaEIsTUFBSztvQ0FDTHFCLFVBQVVqQjs7Ozs7Ozs7Ozs7MENBSWQsOERBQUNVO2dDQUFJRSxXQUFVOzBDQUNQLDRFQUFDdkIseUVBQVdBOzs7Ozs7Ozs7OzBDQUVoQiw4REFBQ3FCO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDTTtvQ0FBT04sV0FBVTs4Q0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RCxFQUFDO0dBaEZZdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saWIvY29tcG9uZW50cy9lZGl0b3IudHN4PzJjODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgSUNvdXJzZSwgdXBkYXRlQ291cnNlIH0gZnJvbSBcIi4uL2FwaVwiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSW1hZ2VQaWNrZXIgfSBmcm9tIFwiQC9hcHAvbGliL2NvbXBvbmVudHMvaW1hZ2UtcGlja2VyXCJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzXCI7XG5cbmludGVyZmFjZSBJUHJvcHN7XG4gICAgZm91bmRDb3Vyc2U6SUNvdXJzZVxufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yID0ocHJvcHM6SVByb3BzKT0+e1xuXG5cbmNvbnN0IFtmb3JtSW5mbywgc2V0Rm9ybUluZm9dID0gdXNlU3RhdGUoe1xuICAgIGlkOiBwcm9wcy5mb3VuZENvdXJzZS5pZCxcbiAgICBuYW1lOnByb3BzLmZvdW5kQ291cnNlLm5hbWUsXG4gICAgZHVyYXRpb246IHByb3BzLmZvdW5kQ291cnNlLmR1cmF0aW9uLFxuICAgIHByaWNlOiBwcm9wcy5mb3VuZENvdXJzZS5wcmljZSxcbiAgICBjb3Zlcjpwcm9wcy5mb3VuZENvdXJzZS5jb3ZlclxufSlcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0oZTpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcblxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1JbmZvKHsuLi5mb3JtSW5mbywgW25hbWVdOnZhbHVlfSApXG5cbn1cbiBjb25zdCBoYW5kbGVFZGl0ID0oZGF0YTpGb3JtRGF0YSk9PntcbmNvbnNvbGUubG9nKFwic2RsamZcIik7XG5cbiAgICBsZXQgdXBkYXRlZENvdXJzZSA9e1xuICAgICAgICBuYW1lOiBkYXRhLmdldCgnbmFtZScpLFxuICAgICAgICBkdXJhdGlvbjogZGF0YS5nZXQoJ2R1cmF0aW9uJyksXG4gICAgICAgIHByaWNlOiBkYXRhLmdldCgncHJpY2UnKSxcbiAgICAgICAgY292ZXI6IGRhdGEuZ2V0KCdjb3ZlcicpLFxuICAgICAgICBpZDpmb3JtSW5mby5pZFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1cGRhdGVkQ291cnNlKTtcbiAgICBcbiAgICAgXG4gIC8vICB1cGRhdGVDb3Vyc2UodXBkYXRlZENvdXJzZSlcbiAgIC8vIHJlZGlyZWN0KCcvJylcbn1cblxuICAgIHJldHVybiAgIDxkaXY+ICA8aDEgY2xhc3NOYW1lPVwiaXMtc2l6ZS01XCI+RWRpdCBDb3Vyc2U8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLXR3by1maWZ0aCBteS00XCI+XG4gICAgICAgIDxmb3JtICBjbGFzc05hbWU9XCJib3hcIiBhY3Rpb249e2hhbmRsZUVkaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUluZm8ubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1JbmZvLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1JbmZvLnByaWNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VQaWNrZXIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2VQaWNrZXIiLCJFZGl0b3IiLCJwcm9wcyIsImZvcm1JbmZvIiwic2V0Rm9ybUluZm8iLCJpZCIsImZvdW5kQ291cnNlIiwibmFtZSIsImR1cmF0aW9uIiwicHJpY2UiLCJjb3ZlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZUVkaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZWRDb3Vyc2UiLCJnZXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/components/editor.tsx\n"));

/***/ })

});