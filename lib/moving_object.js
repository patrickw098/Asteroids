function MovingObject(options){

  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}


  MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.lineWidth = '5';
  ctx.stroke();
};


MovingObject.prototype.move = function(){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  if ( this.pos[0] >= 1280 ) {
    this.pos[0] = 0;
  } else if (this.pos[1] >= 720) {
    this.pos[1] = 0;
  } else if (this.pos[0] <= 0 ) {
    this.pos[0] = 1280;
  } else if (this.pos[1] <= 0 ) {
    this.pos[1] = 720;
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const firstObj = this;
  function distance(firstObj, otherObject) {
    let distance = Math.sqrt(Math.pow(firstObj.pos[0] - otherObject.pos[0], 2) + Math.pow(firstObj.pos[1] - otherObject.pos[1], 2));

    return distance;
  }

  if (distance(firstObj, otherObject) <= firstObj.radius + otherObject.radius) {
    return true;
  } else {
    return false;
  }
};



module.exports = MovingObject;
// const mo = new MovingObject(
//   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
// );
