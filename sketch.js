
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, side1, side2, side3, ground;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(50, 650, 20, 20);
	side1 = new Dustbin(600, 590, 20, 70);
	side2 = new Dustbin(660, 640, 90, 20);
	side3 = new Dustbin(710, 590, 20, 70);
	ground = new Ground(200, 670, 2800, 20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);
	paperObject.display();
	side1.display();
	side2.display();
	side3.display();
	ground.display();

	keyPressed();

	drawSprites();

}

function keyPressed() {
	paperObject.x += 2;
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });
		paperObject.y -= 2;
	}
}




