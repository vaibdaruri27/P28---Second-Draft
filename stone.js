class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2        
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("pics/stone.png");
      this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pause = this.body.position;
        fill("red");
        ellipseMode(CENTER);
        ellipse(image.x,image.y,this.radius);
        imageMode(CENTER);
        image(this.image,pause.x,pause.y,50,50);
    }
    // detectCollision(lstone,lmango){
    //     mangoBodyPosition=lmango.body.position;
    //     stoneBodyPosition=lstone.body.position;
       
    //    var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    //    if(distance<=lmango.r+stone.r){
    //     Matter.body.setStatic(Imango.body,false)
    //    }
    //   }
}