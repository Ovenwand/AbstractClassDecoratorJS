(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AbstractDecoratorJS"] = factory();
	else
		root["AbstractDecoratorJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var utils_hasOwnProperty = function hasOwnProperty() {
  var _Object$prototype$has;

  return (_Object$prototype$has = Object.prototype.hasOwnProperty).call.apply(_Object$prototype$has, arguments);
};
var isDefined = function isDefined(prop, obj) {
  var loose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return utils_hasOwnProperty(obj, prop) || loose && obj[prop] !== undefined;
};
var isEqualType = function isEqualType(a, b) {
  var loose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return _typeof(a) === _typeof(b) || loose && a instanceof b.constructor;
};
// CONCATENATED MODULE: ./src/Abstract.js
function Abstract_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Abstract_typeof = function _typeof(obj) { return typeof obj; }; } else { Abstract_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Abstract_typeof(obj); }


/* harmony default export */ var Abstract = (function (value) {
  if (Abstract_typeof(value) === 'object') {
    return function (AbstractClass) {
      return decorator(AbstractClass, value);
    };
  } else {
    return decorator(value);
  }
});

function getAbstractClassDescriptor(AbstractClass) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceDescriptors = Object.getOwnPropertyDescriptors(AbstractClass.prototype);
  var staticDescriptors = Object.getOwnPropertyDescriptors(AbstractClass);
  var inheritDescriptors = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options.inherit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;
      inheritDescriptors[prop] = instanceDescriptors[prop] || staticDescriptors[prop];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return {
    inherit: inheritDescriptors,
    instance: instanceDescriptors,
    static: staticDescriptors
  };
}

function decorator(AbstractClass, options) {
  if (isDefined('__abstract__', AbstractClass)) {
    return;
  }

  var __abstract__ = getAbstractClassDescriptor(AbstractClass, options);

  Object.defineProperty(AbstractClass, '__abstract__', {
    value: __abstract__
  });
}
// CONCATENATED MODULE: ./src/Implements.js

/* harmony default export */ var Implements = (function () {
  for (var _len = arguments.length, AbstractClasses = new Array(_len), _key = 0; _key < _len; _key++) {
    AbstractClasses[_key] = arguments[_key];
  }

  return function (Class) {
    var _arr = AbstractClasses;

    for (var _i = 0; _i < _arr.length; _i++) {
      var AbstractClass = _arr[_i];

      if (!isDefined('__abstract__', AbstractClass)) {
        throw new TypeError("The '@Implement' decorator can only implement abstract classes. The provided class ".concat(AbstractClass.name, " is not abstract, make sure to annotate it with the '@Abstract' decorator."));
      }

      var descriptors = AbstractClass.__abstract__;
      var __implements__ = AbstractClass;
      Object.defineProperty(Class, '__implements__', {
        value: __implements__
      });
      ensurePropInheritance(Class, descriptors);
      validateInstanceProps(AbstractClass, Class, descriptors.instance);
      validateStaticProps(AbstractClass, Class, descriptors.static);
    }
  };
});

function ensurePropInheritance(Class, classDescriptor) {
  var instanceKeys = Object.keys(classDescriptor.instance);
  var staticKeys = Object.keys(classDescriptor.static);

  var _arr2 = Object.keys(classDescriptor.inherit);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var prop = _arr2[_i2];

    if (instanceKeys.includes(prop)) {
      if (Class.prototype[prop] === undefined) {
        Object.defineProperty(Class.prototype, prop, classDescriptor.inherit[prop]);
      }
    } else if (staticKeys.includes(prop)) {
      if (Class[prop] === undefined) {
        Object.defineProperty(Class, prop, classDescriptor.inherit[prop]);
      }
    }
  }
}

function validateInstanceProps(AbstractClass, Class, descriptors) {
  var _arr3 = Object.keys(descriptors);

  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    var prop = _arr3[_i3];

    if (!isDefined(prop, Class.prototype, false)) {
      throw new TypeError("Class '".concat(Class.name, " is missing override for property '").concat(prop, "' on ").concat(AbstractClass.name, "."));
    }

    if (!isEqualType(Class.prototype[prop], descriptors[prop].value)) {
      throw new TypeError("Property '".concat(prop, "' of class '").concat(Class.name, "' match the type of '").concat(prop, "' on '").concat(AbstractClass.name, "'."));
    }
  }
}

function validateStaticProps(AbstractClass, Class, descriptors) {
  var _arr4 = Object.keys(descriptors);

  for (var _i4 = 0; _i4 < _arr4.length; _i4++) {
    var prop = _arr4[_i4];

    if (!isDefined(prop, Class, false)) {
      throw new TypeError("Class '".concat(Class.name, " is missing override for property '").concat(prop, "' on ").concat(AbstractClass.name, "."));
    }

    if (!isEqualType(Class[prop], descriptors[prop].value)) {
      throw new TypeError("Property '".concat(prop, "' of class '").concat(Class.name, "' match the type of '").concat(prop, "' on '").concat(AbstractClass.name, "'."));
    }
  }
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Abstract */__webpack_require__.d(__webpack_exports__, "Abstract", function() { return Abstract; });
/* concated harmony reexport Implements */__webpack_require__.d(__webpack_exports__, "Implements", function() { return Implements; });




/***/ })
/******/ ]);
});