function Ship(options) {
  MovingObject.call(this, options);
  this.color = 'red';
  this.radius = 10;
  this.vel = [ 100, 100];
}

module.exports = Ship;
