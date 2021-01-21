class barrel{
  constructor(){
    var options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(displayWidth/2,600,10,60,options);
    World.add(world,this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("black");
    rectMode(CENTER);
    rect(0,0,10,60);
    pop();
  }
}
