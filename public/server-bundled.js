/******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__,
        ); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode,
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key),
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './controllers/home-controller.js':
            /*!****************************************!*\
  !*** ./controllers/home-controller.js ***!
  \****************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                eval(
                    "__webpack_require__.r(__webpack_exports__);\nvar path = __webpack_require__(/*! path */ \"path\"); // 1. Controller for your homepage or index\n\n\nfunction renderHome(req, res) {\n  res.render('index', {\n    // for es6Renderer\n    locals: {\n      pageTitle: 'Express Workbox Webpack Babel Scaffold',\n      title: 'Simple'\n    },\n    partials: {\n      header: path.resolve('public/views/partials/header.html'),\n      // final footer is inside /public/build/\n      // but template is inside /public/views/partials/\n      // because WebPack (configured for this case) should auto inject all the js assets\n      footer: path.resolve('public/build/footer.html')\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderHome);\n\n//# sourceURL=webpack:///./controllers/home-controller.js?",
                );

                /***/
            },

        /***/ './controllers/test-controller.js':
            /*!****************************************!*\
  !*** ./controllers/test-controller.js ***!
  \****************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                eval(
                    "__webpack_require__.r(__webpack_exports__);\nvar path = __webpack_require__(/*! path */ \"path\"); // 1. Controller for your homepage or index\n\n\nfunction renderTest(req, res) {\n  res.render('test', {\n    // for es6Renderer\n    locals: {\n      pageTitle: 'Sample Page for Testing Route',\n      title: 'Test Page'\n    },\n    partials: {\n      header: path.resolve('public/views/partials/header.html'),\n      // final footer is inside /public/build/\n      // but template is inside /public/views/partials/\n      // because WebPack (configured for this case) should auto inject all the js assets\n      footer: path.resolve('public/build/footer.html')\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTest);\n\n//# sourceURL=webpack:///./controllers/test-controller.js?",
                );

                /***/
            },

        /***/ './public/server.js':
            /*!**************************!*\
  !*** ./public/server.js ***!
  \**************************/
            /*! no exports provided */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                eval(
                    "__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _routes_home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes/home-route */ \"./routes/home-route.js\");\n/* harmony import */ var _routes_test_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/test-route */ \"./routes/test-route.js\");\n// 0. Local App Modules\n\n // 1. Library Modules\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar es6Renderer = __webpack_require__(/*! express-es6-template-engine */ \"express-es6-template-engine\"); // 2. Initializations\n\n\nvar app = express();\nvar port = process.env.PORT || 3007;\nvar publicAssetsPath = path.join(__dirname, './');\nvar viewsPath = path.join(__dirname, './views/'); // 3. View: Template engine\n\napp.engine('html', es6Renderer);\napp.set('views', viewsPath);\napp.set('view engine', 'html'); // 4. Middlewares\n\napp.use(express.static(publicAssetsPath)); // 5.1 GET, for the Service Worker\n\napp.get('/sw.js', function (req, res) {\n  res.sendFile(path.resolve(__dirname, '../sw.js'));\n}); // 5.2 Routes\n\napp.use('/', _routes_home_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\napp.use('/test', _routes_test_route__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // 6. Listen\n\napp.listen(port, function () {\n  console.log(\"App is listening on port \".concat(port)); // Browser-Refresh\n  // Comment this out before building for Production\n  // This is only for development, to auto refresh the browser\n\n  if (process.send) {\n    process.send('online');\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"public\"))\n\n//# sourceURL=webpack:///./public/server.js?",
                );

                /***/
            },

        /***/ './routes/home-route.js':
            /*!******************************!*\
  !*** ./routes/home-route.js ***!
  \******************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_home_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/home-controller */ "./controllers/home-controller.js");\n// Controller for this route\n // Express Route\n\nvar express = __webpack_require__(/*! express */ "express");\n\nvar router = express.Router(); // The \'/\' is the root for your homepage\n// So if user visits index, this router will call the pages controller for home\n\nrouter.get(\'/\', _controllers_home_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);\n/* harmony default export */ __webpack_exports__["default"] = (router);\n\n//# sourceURL=webpack:///./routes/home-route.js?',
                );

                /***/
            },

        /***/ './routes/test-route.js':
            /*!******************************!*\
  !*** ./routes/test-route.js ***!
  \******************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_test_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/test-controller */ "./controllers/test-controller.js");\n// Controller for this route\n // Express Route\n\nvar express = __webpack_require__(/*! express */ "express");\n\nvar router = express.Router(); // The \'/\' is the root for your homepage\n// So if user visits index, this router will call the pages controller for home\n\nrouter.get(\'/\', _controllers_test_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);\n/* harmony default export */ __webpack_exports__["default"] = (router);\n\n//# sourceURL=webpack:///./routes/test-route.js?',
                );

                /***/
            },

        /***/ 0:
            /*!********************************!*\
  !*** multi ./public/server.js ***!
  \********************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                eval(
                    'module.exports = __webpack_require__(/*! /Users/MelodicCrypter/Documents/MC Dev/Scaffolds/Simple-Express-Babel-Webpack/public/server.js */"./public/server.js");\n\n\n//# sourceURL=webpack:///multi_./public/server.js?',
                );

                /***/
            },

        /***/ express:
            /*!**************************!*\
  !*** external "express" ***!
  \**************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                eval(
                    'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?',
                );

                /***/
            },

        /***/ 'express-es6-template-engine':
            /*!**********************************************!*\
  !*** external "express-es6-template-engine" ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                eval(
                    'module.exports = require("express-es6-template-engine");\n\n//# sourceURL=webpack:///external_%22express-es6-template-engine%22?',
                );

                /***/
            },

        /***/ path:
            /*!***********************!*\
  !*** external "path" ***!
  \***********************/
            /*! no static exports found */
            /***/ function(module, exports) {
                eval(
                    'module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?',
                );

                /***/
            },

        /******/
    },
);
