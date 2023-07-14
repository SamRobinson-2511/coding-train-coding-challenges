function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 1;

  this.eat = function(pos){
    let d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x*scl;
    this.yspeed = y*scl;
  };

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
    
  };

  this.show = function(){
    fill(255);
    rect(this.x, this.y, scl, scl);
  };
};