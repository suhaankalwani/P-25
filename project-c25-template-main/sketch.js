
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Paper 

function preload (); {
	Paper.loadImage("sprites/Paper.png");
	

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	Paper = new Paper (100,100,50,50)



	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();

  keyPressed();


}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body,Paper.body,position,{x:130,y:-145})
	}
}

