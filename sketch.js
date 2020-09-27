
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boy2, stone;

function preload()
{
	boy = loadImage("pics/boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(500,695,1000,40);

	stone = new Stone(100,100,50);

	chain = new Chain(stone.body,{x:90,y:526});

	boy2 = createSprite(150,605,20,20);
	boy2.addImage(boy);
	boy2.scale = 0.12;

	tree = new Tree(700,445,20,20);

	mango1 = new Mango(800,275,60);
    mango2 = new Mango(847,355,60);
    mango3 = new Mango(700,375,60);
    mango4 = new Mango(597,305,60);
	mango5 = new Mango(540,415,60);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("aqua");

  drawSprites();
 
  tree.display(); 
  chain.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}  

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.radius+lstone.radius){
    console.log(lmango.body.isStatic); 
     Matter.Body.setStatic(lmango.body,false);
  }
 }
 
 


