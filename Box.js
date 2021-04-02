class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution : 1,
        density : 1.2,
        friction : 0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }

  display(){

    var pos =this.body.position;

    if(this.body.speed < 3){
      rectMode(CENTER);
      fill("skyblue");
      rect(pos.x, pos.y, this.width, this.height);
    }else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visiblity);
      pop();
    }   

  }

  score(){

    if(this.Visibility < 0 && this.Visibility > -105){
      score++
    }

  }

}