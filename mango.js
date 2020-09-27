class Mango{
    constructor(x,y,radius){
        var options = {
          isStatic:true,
          restitution:0,
          friction:1           
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("pics/mango.png");
    this.radius = radius;
  }
  display(){
     var pos = this.body.position;
     ellipseMode(CENTER);
     ellipse(image.x, image.y,this.radius); 
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,60,60);
  }
}