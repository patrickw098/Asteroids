function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = 'gray';
  this.radius = 20;
  this.vel = [ Math.random()*10, Math.random()*10];
}

module.exports = Asteroid;





// Other properties are filled in for you.
