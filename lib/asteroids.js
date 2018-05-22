const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
Util.inherits(Asteroid, MovingObject);
Util.inherits(Ship, MovingObject);
const Game = require("./game.js");
const GameView = require("./game_view.js");


window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Ship = Ship;
window.Game = Game;
window.GameView = GameView;


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("gamecanvas");
   const ctx = canvasEl.getContext("2d");
   ctx.globalCompositeOperation = 'destination-over';
   window.onload = function() {
   var img = document.getElementById("galaxy");
   ctx.drawImage(img, 0, 0);};

   const game = new Game();
   const gameView = new GameView(game, ctx);
   gameView.start();

   // const mo = new MovingObject(
   //   { pos: [30, 30], vel: [10, 10], radius: 5, color: "white"}
   // );
   //
   // mo.draw(ctx);
   // mo.move();
   // mo.draw(ctx);
   //
   //
   //
   // const blah = new Asteroid({ pos: [600, 600] });
   // blah.draw(ctx);
});
