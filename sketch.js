const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObj,tree,ground,mango1,mango2,mango3,sling;

function preload()
{
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);
	boy =createSprite(200,630,20,30);
	boy.addImage("image",boyImg)
    boy.scale=0.09;
	engine = Engine.create();
	world = engine.world;

	tree = new Tree (200,100);
	ground = new Ground(400,690,800,20);
	stoneObj = new Stone(155,570);
	mango1 = new Mango(530,440);
	mango2 = new Mango(590,400);
	mango3 = new Mango(660,420);
	sling =new Elastic(stoneObj.body,{x:155,y:570});

	detectColision(stoneObj,mango1);
	detectColision(stoneObj,mango2);
	detectColision(stoneObj,mango3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(118,252,219);
  
  drawSprites();
  tree.display();
  ground.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectColision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:155 , y:570});
		launcherObject.attach(stoneObj.body);
	}
}