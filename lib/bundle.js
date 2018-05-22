/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Asteroid(options) {\n  MovingObject.call(this, options);\n  this.color = 'gray';\n  this.radius = 20;\n  this.vel = [ Math.random()*10, Math.random()*10];\n}\n\nmodule.exports = Asteroid;\n\n\n\n\n\n// Other properties are filled in for you.\n\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./lib/ship.js\");\nUtil.inherits(Asteroid, MovingObject);\nUtil.inherits(Ship, MovingObject);\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Ship = Ship;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvasEl = document.getElementById(\"gamecanvas\");\n   const ctx = canvasEl.getContext(\"2d\");\n   ctx.globalCompositeOperation = 'destination-over';\n   window.onload = function() {\n   var img = document.getElementById(\"galaxy\");\n   ctx.drawImage(img, 0, 0);};\n\n   const game = new Game();\n   const gameView = new GameView(game, ctx);\n   gameView.start();\n\n   // const mo = new MovingObject(\n   //   { pos: [30, 30], vel: [10, 10], radius: 5, color: \"white\"}\n   // );\n   //\n   // mo.draw(ctx);\n   // mo.move();\n   // mo.draw(ctx);\n   //\n   //\n   //\n   // const blah = new Asteroid({ pos: [600, 600] });\n   // blah.draw(ctx);\n});\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game() {\n  this.DIM_X = 1280;\n  this.DIM_Y = 720;\n  this.NUM_ASTEROIDS = 15;\n  this.ASTEROIDS = this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n  let count = 0;\n  let asteroids = [];\n\n  while ( count < this.NUM_ASTEROIDS ) {\n    let asteroid = new Asteroid( { pos: this.randomPosition() });\n    asteroids.push(asteroid);\n    count ++;\n  }\n\n  return asteroids;\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0,1280,720);\n  // ctx.fillStyle = 'black';\n  // ctx.fillRect(0,0,1280,720);\n  // ctx.fill();\n  let allObj = this.allObjects();\n  this.ASTEROIDS.forEach( (el) => {\n    el.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.ASTEROIDS.forEach( (el) => {\n    el.move();\n  });\n};\n\nGame.prototype.checkCollisions = function() {\n  for (var i = 0; i < this.ASTEROIDS.length - 1; i++) {\n    let firstObj = this.ASTEROIDS[i];\n    for (var j = i + 1; j < this.ASTEROIDS.length; j++) {\n      let secondObj = this.ASTEROIDS[j];\n\n      if (firstObj.isCollidedWith(secondObj)) {\n        firstObj.vel[0] = -firstObj.vel[0];\n        firstObj.vel[1] = -firstObj.vel[1];\n        secondObj.vel[0] = -secondObj.vel[0];\n        secondObj.vel[1] = -secondObj.vel[1];\n        // this.removeObject(firstObj);\n        // this.removeObject(secondObj);\n      }\n    }\n  }\n};\n\nGame.prototype.allObjects = function(ship) {\n  const allObj = [];\n  this.ASTEROIDS.forEach(el => allObj.push(el));\n  allObj.push(ship);\n  return allObj;\n};\n\nGame.prototype.removeObject = function(obj){\n  let index = this.ASTEROIDS.indexOf(obj);\n  if (index > -1) {\n    this.ASTEROIDS = this.ASTEROIDS.slice(0, index).concat(this.ASTEROIDS.slice(index + 1));\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.randomPosition = function() {\n  let x = Math.floor(Math.random() * 1280);\n  let y = Math.floor(Math.random() * 720);\n\n  return [x,y];\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction GameView(game,ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\n\nGameView.prototype.start = function() {\n  const that = this;\n  window.setInterval(function(){\n    that.game.draw(that.ctx);\n    that.game.step();\n  },20);\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options){\n\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\n\n  MovingObject.prototype.draw = function(ctx){\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n  ctx.strokeStyle = \"white\";\n  ctx.lineWidth = '5';\n  ctx.stroke();\n};\n\n\nMovingObject.prototype.move = function(){\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  if ( this.pos[0] >= 1280 ) {\n    this.pos[0] = 0;\n  } else if (this.pos[1] >= 720) {\n    this.pos[1] = 0;\n  } else if (this.pos[0] <= 0 ) {\n    this.pos[0] = 1280;\n  } else if (this.pos[1] <= 0 ) {\n    this.pos[1] = 720;\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const firstObj = this;\n  function distance(firstObj, otherObject) {\n    let distance = Math.sqrt(Math.pow(firstObj.pos[0] - otherObject.pos[0], 2) + Math.pow(firstObj.pos[1] - otherObject.pos[1], 2));\n\n    return distance;\n  }\n\n  if (distance(firstObj, otherObject) <= firstObj.radius + otherObject.radius) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n\n\nmodule.exports = MovingObject;\n// const mo = new MovingObject(\n//   { pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\"}\n// );\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/ship.js":
/*!*********************!*\
  !*** ./lib/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Ship(options) {\n  MovingObject.call(this, options);\n  this.color = 'red';\n  this.radius = 10;\n  this.vel = [ 100, 100];\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./lib/ship.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Function.prototype.inherits = function (ParentClass) {\n//   function Surrogate(){}\n//   Surrogate.prototype = ParentClass.prototype;\n//   this.prototype = new Surrogate();\n//   this.prototype.constructor = this;\n//  };\n\n\n const Util = {\n   inherits(childClass, parentClass) {\n     // function Surrogate(){}\n     // Surrogate.prototype = parentClass.prototype;\n     // childClass.prototype = new Surrogate();\n     // childClass.prototype.constructor = childClass;\n     childClass.prototype = Object.create(parentClass.prototype);\n     childClass.prototype.constructor = childClass;\n   },\n   randomVec(length) {\n     const deg = 2 * Math.PI * Math.random();\n     return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n   },\n   // Scale the length of a vector by the given amount.\n   scale(vec, m) {\n     return [vec[0] * m, vec[1] * m];\n   }\n };\n\n module.exports = Util;\n\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });