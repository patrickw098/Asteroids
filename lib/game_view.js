

function GameView(game,ctx){
  this.game = game;
  this.ctx = ctx;
}


GameView.prototype.start = function() {
  const that = this;
  window.setInterval(function(){
    that.game.draw(that.ctx);
    that.game.step();
  },20);
};

module.exports = GameView;
