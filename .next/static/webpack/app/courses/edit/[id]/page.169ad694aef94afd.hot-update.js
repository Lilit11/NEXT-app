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

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("// This file must be bundled in the app's client layer, it shouldn't be directly\n// imported by the server.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"createServerReference\", ({\n    enumerable: true,\n    get: function() {\n        return createServerReference;\n    }\n}));\nconst _appcallserver = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\nfunction createServerReference(id) {\n    // Since we're using the Edge build of Flight client for SSR [1], here we need to\n    // also use the same Edge build to create the reference. For the client bundle,\n    // we use the default and let Webpack to resolve it to the correct version.\n    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26\n    const { createServerReference: createServerReferenceImpl } =  false ? 0 : __webpack_require__(/*! react-server-dom-webpack/client */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-server-dom-webpack/client.js\");\n    return createServerReferenceImpl(id, _appcallserver.callServer);\n}\n\n//# sourceMappingURL=action-client-wrapper.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseURBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRCxFQUFFLE1BQTBCLEdBQUcsQ0FBK0MsR0FBRyxtQkFBTyxDQUFDLGlJQUFpQztBQUN6TDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWxvYWRlci9hY3Rpb24tY2xpZW50LXdyYXBwZXIuanM/NWRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgbXVzdCBiZSBidW5kbGVkIGluIHRoZSBhcHAncyBjbGllbnQgbGF5ZXIsIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseVxuLy8gaW1wb3J0ZWQgYnkgdGhlIHNlcnZlci5cblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlU2VydmVyUmVmZXJlbmNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVTZXJ2ZXJSZWZlcmVuY2U7XG4gICAgfVxufSk7XG5jb25zdCBfYXBwY2FsbHNlcnZlciA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY2xpZW50L2FwcC1jYWxsLXNlcnZlclwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlclJlZmVyZW5jZShpZCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIHVzaW5nIHRoZSBFZGdlIGJ1aWxkIG9mIEZsaWdodCBjbGllbnQgZm9yIFNTUiBbMV0sIGhlcmUgd2UgbmVlZCB0b1xuICAgIC8vIGFsc28gdXNlIHRoZSBzYW1lIEVkZ2UgYnVpbGQgdG8gY3JlYXRlIHRoZSByZWZlcmVuY2UuIEZvciB0aGUgY2xpZW50IGJ1bmRsZSxcbiAgICAvLyB3ZSB1c2UgdGhlIGRlZmF1bHQgYW5kIGxldCBXZWJwYWNrIHRvIHJlc29sdmUgaXQgdG8gdGhlIGNvcnJlY3QgdmVyc2lvbi5cbiAgICAvLyAxOiBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi8xNmViODBiMGIwYmUxM2YwNGE2NDA3OTQzNjY0YjVlZmQ4ZjNkN2QwL3BhY2thZ2VzL25leHQvc3JjL3NlcnZlci9hcHAtcmVuZGVyL3VzZS1mbGlnaHQtcmVzcG9uc2UudHN4I0wyNC1MMjZcbiAgICBjb25zdCB7IGNyZWF0ZVNlcnZlclJlZmVyZW5jZTogY3JlYXRlU2VydmVyUmVmZXJlbmNlSW1wbCB9ID0gISFwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPyByZXF1aXJlKFwicmVhY3Qtc2VydmVyLWRvbS13ZWJwYWNrL2NsaWVudC5lZGdlXCIpIDogcmVxdWlyZShcInJlYWN0LXNlcnZlci1kb20td2VicGFjay9jbGllbnRcIik7XG4gICAgcmV0dXJuIGNyZWF0ZVNlcnZlclJlZmVyZW5jZUltcGwoaWQsIF9hcHBjYWxsc2VydmVyLmNhbGxTZXJ2ZXIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb24tY2xpZW50LXdyYXBwZXIuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/lib/actions/course-actions.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/actions/course-actions.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAdd: function() { return /* binding */ handleAdd; },
/* harmony export */   handleEdit: function() { return /* binding */ handleEdit; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"18d9ae6b0ef6ac6f88fec06a9103e8c2140c6e7d":"handleEdit","3025b61579f0531491a490a368988bac261c2c75":"$$ACTION_1","7c2ec09374e0e119cdc132b2cd64a6b49d1042a0":"handleAdd","a8fa7fcf2a51da3a6f6ed01ec7df9a39daf85819":"$$ACTION_0"} */ var handleEdit = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("18d9ae6b0ef6ac6f88fec06a9103e8c2140c6e7d");

var handleAdd = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("7c2ec09374e0e119cdc132b2cd64a6b49d1042a0");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/lib/components/editor.tsx":
/*!*******************************************!*\
  !*** ./src/app/lib/components/editor.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/actions/course-actions */ \"(app-pages-browser)/./src/app/lib/actions/course-actions.ts\");\n/* __next_internal_client_entry_do_not_use__ Editor auto */ \nvar _s = $RefreshSig$();\n\n\nconst Editor = (param)=>{\n    let { foundCourse } = param;\n    _s();\n    const [formInfo, setFormInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: foundCourse.id,\n        name: foundCourse.name,\n        duration: foundCourse.duration,\n        price: foundCourse.price,\n        cover: foundCourse.cover\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormInfo({\n            ...formInfo,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-5\",\n                children: \"Edit Course\"\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"is-two-fifth my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        action: _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_2__.handleEdit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: formInfo.name,\n                                    className: \"input is-primary\",\n                                    name: \"name\",\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: foundCourse.duration,\n                                    className: \"input is-primary\",\n                                    name: \"duration\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: foundCourse.price,\n                                    className: \"input is-primary\",\n                                    name: \"price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImagePicker, {}, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button is-danger\",\n                                    children: \"submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lilithakobyan/Desktop/JS/FrontEnd/2 Module/Server-actions-sql/src/app/lib/components/editor.tsx\",\n        lineNumber: 24,\n        columnNumber: 14\n    }, undefined);\n};\n_s(Editor, \"Z3N+uR1icGuyCp65I0u5hjvFOpw=\");\n_c = Editor;\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL2NvbXBvbmVudHMvZWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR3dEO0FBQ0s7QUFFdEQsTUFBTUUsU0FBUTtRQUFDLEVBQUNDLFdBQVcsRUFBQzs7SUFHbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxJQUFJSCxZQUFZRyxFQUFFO1FBQ2xCQyxNQUFLSixZQUFZSSxJQUFJO1FBQ3JCQyxVQUFVTCxZQUFZSyxRQUFRO1FBQzlCQyxPQUFPTixZQUFZTSxLQUFLO1FBQ3hCQyxPQUFNUCxZQUFZTyxLQUFLO0lBQzNCO0lBRUEsTUFBTUMsZUFBYyxDQUFDQztRQUVqQixNQUFNLEVBQUVMLElBQUksRUFBRU0sS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENULFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0csS0FBSyxFQUFDTTtRQUFLO0lBRTFDO0lBQ0kscUJBQVMsOERBQUNFOztZQUFJOzBCQUFFLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBWTs7Ozs7OzBCQUMxQyw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1gsNEVBQUNGO29CQUFJRSxXQUFVOzhCQUNmLDRFQUFDQzt3QkFBTUQsV0FBVTt3QkFBTUUsUUFBUWxCLHVFQUFVQTs7MENBQ3JDLDhEQUFDYztnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0c7b0NBQ0RDLE1BQUs7b0NBQ0xSLE9BQU9ULFNBQVNHLElBQUk7b0NBQ3BCVSxXQUFVO29DQUNWVixNQUFLO29DQUNMZSxVQUFVWDs7Ozs7Ozs7Ozs7MENBSWQsOERBQUNJO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDRztvQ0FDREMsTUFBSztvQ0FDTFIsT0FBT1YsWUFBWUssUUFBUTtvQ0FDM0JTLFdBQVU7b0NBQ1ZWLE1BQUs7Ozs7Ozs7Ozs7OzBDQUlULDhEQUFDUTtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ0c7b0NBQ0RDLE1BQUs7b0NBQ0xSLE9BQU9WLFlBQVlNLEtBQUs7b0NBQ3hCUSxXQUFVO29DQUNWVixNQUFLOzs7Ozs7Ozs7OzswQ0FJVCw4REFBQ1E7Z0NBQUlFLFdBQVU7MENBQ1AsNEVBQUNNOzs7Ozs7Ozs7OzBDQUVMLDhEQUFDUjtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ087b0NBQU9QLFdBQVU7OENBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekQsRUFBQztHQTdEWWY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saWIvY29tcG9uZW50cy9lZGl0b3IudHN4PzJjODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgSUNvdXJzZSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGhhbmRsZUVkaXQgfSBmcm9tIFwiQC9hcHAvbGliL2FjdGlvbnMvY291cnNlLWFjdGlvbnNcIlxuXG5leHBvcnQgY29uc3QgRWRpdG9yID0oe2ZvdW5kQ291cnNlfSk9PntcblxuXG5jb25zdCBbZm9ybUluZm8sIHNldEZvcm1JbmZvXSA9IHVzZVN0YXRlKHtcbiAgICBpZDogZm91bmRDb3Vyc2UuaWQsXG4gICAgbmFtZTpmb3VuZENvdXJzZS5uYW1lLFxuICAgIGR1cmF0aW9uOiBmb3VuZENvdXJzZS5kdXJhdGlvbixcbiAgICBwcmljZTogZm91bmRDb3Vyc2UucHJpY2UsXG4gICAgY292ZXI6Zm91bmRDb3Vyc2UuY292ZXJcbn0pXG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9KGU6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XG5cbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtSW5mbyh7Li4uZm9ybUluZm8sIFtuYW1lXTp2YWx1ZX0gKVxuXG59XG4gICAgcmV0dXJuICAgPGRpdj4gIDxoMSBjbGFzc05hbWU9XCJpcy1zaXplLTVcIj5FZGl0IENvdXJzZTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtdHdvLWZpZnRoIG15LTRcIj5cbiAgICAgICAgPGZvcm0gIGNsYXNzTmFtZT1cImJveFwiIGFjdGlvbj17aGFuZGxlRWRpdH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmaWVsZCBteS00XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtSW5mby5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm91bmRDb3Vyc2UuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZvdW5kQ291cnNlLnByaWNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlUGlja2VyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyXCI+c3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PiBcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJoYW5kbGVFZGl0IiwiRWRpdG9yIiwiZm91bmRDb3Vyc2UiLCJmb3JtSW5mbyIsInNldEZvcm1JbmZvIiwiaWQiLCJuYW1lIiwiZHVyYXRpb24iLCJwcmljZSIsImNvdmVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJJbWFnZVBpY2tlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/components/editor.tsx\n"));

/***/ })

});