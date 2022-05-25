class Ground 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic : true
    };

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  
    this.ground = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.ground);
  }

  display() {
    var pos = this.ground.position;
    
    push();
    rectMode(CENTER);
    stroke(255);
    fill(70);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
  
}
  

 
