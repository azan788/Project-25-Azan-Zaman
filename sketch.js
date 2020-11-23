const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash, ground1, ground2, side1, side2, side3;
var binIMG;

function preload() {
	binIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trash = new Paper(200,600,20);
	ground = new Ground(400,690,800,20);
	ground2 = new Ground(400,670,800,20);
	side1 = new Dustbin(600,670,150,20);
	side2 = new Dustbin(515,580,20,200);
	side3 = new Dustbin(670,580,20,200);
	
	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background("red");
	
	console.log(mouseX , mouseY , frameCount);

	if(trash.body.position.y > 500 && trash.body.position.x < 400){
		yeet();
	}

	drawSprites();

	trash.display();
	ground.display();
	side1.display();
	side2.display();
	side3.display();
	image(binIMG, 500,480,200,200);

}

function yeet() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, trash.body.position,{x:0.7,y:-2.1});
	}
}