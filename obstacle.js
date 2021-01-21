class obstacle {
  constructor(){
    var options = {

    }
    this.body = Bodies.circle(random(400,900),0,30);
    this.body.velocity.y = 5;
    World.add(world,this.body);
  }

  display() {
  ellipseMode(RADIUS);
  fill("grey");
  ellipse(this.body.position.x,this.body.position.y,30,300);
  }
}
