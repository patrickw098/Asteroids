function Game() {
  this.DIM_X = 1280;
  this.DIM_Y = 720;
  this.NUM_ASTEROIDS = 15;
  this.ASTEROIDS = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  let count = 0;
  let asteroids = [];

  while ( count < this.NUM_ASTEROIDS ) {
    let asteroid = new Asteroid( { pos: this.randomPosition() });
    asteroids.push(asteroid);
    count ++;
  }

  return asteroids;
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0,1280,720);
  // ctx.fillStyle = 'black';
  // ctx.fillRect(0,0,1280,720);
  // ctx.fill();
  let allObj = this.allObjects();
  this.ASTEROIDS.forEach( (el) => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.ASTEROIDS.forEach( (el) => {
    el.move();
  });
};

Game.prototype.checkCollisions = function() {
  for (var i = 0; i < this.ASTEROIDS.length - 1; i++) {
    let firstObj = this.ASTEROIDS[i];
    for (var j = i + 1; j < this.ASTEROIDS.length; j++) {
      let secondObj = this.ASTEROIDS[j];

      if (firstObj.isCollidedWith(secondObj)) {
        firstObj.vel[0] = -firstObj.vel[0];
        firstObj.vel[1] = -firstObj.vel[1];
        secondObj.vel[0] = -secondObj.vel[0];
        secondObj.vel[1] = -secondObj.vel[1];
        // this.removeObject(firstObj);
        // this.removeObject(secondObj);
      }
    }
  }
};

Game.prototype.allObjects = function(ship) {
  const allObj = [];
  this.ASTEROIDS.forEach(el => allObj.push(el));
  allObj.push(ship);
  return allObj;
};

Game.prototype.removeObject = function(obj){
  let index = this.ASTEROIDS.indexOf(obj);
  if (index > -1) {
    this.ASTEROIDS = this.ASTEROIDS.slice(0, index).concat(this.ASTEROIDS.slice(index + 1));
  }
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * 1280);
  let y = Math.floor(Math.random() * 720);

  return [x,y];
};

module.exports = Game;
