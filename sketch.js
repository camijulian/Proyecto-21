const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 450);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	//crear los cuerpos aquí.
ball = Bodies.circle(150, 270, 25, ball_options);
World.add(world, ball);

 groundObj = new Ground(width/2, 400, width, 20);
 leftSide = new Ground(700,355,15,70);
 rightSide = new Ground(900,355,15,70);

	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		hForce();
	}
}


function draw() {
  background(250);
  
  drawSprites();

  ellipse(ball.position.x, ball.position.y, 25);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine); 
}



function hForce()
{
  Matter.Body.applyForce(ball, {x : 0, y : 0}, {x : 0, y : -0.5});
}

