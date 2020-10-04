

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);
	


	


	engine = Engine.create();
	world = engine.world;

	
	

	

 box1 = new box(1300, 680, 200,20);
	box2 = new box(1200,600,20,180);
	box3 = new box(1395,600,20,180);

	ground1 = new ground(700,height-35,2000,20)


  paper = new paper(50,height-40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ground1.display();
  box1.display();
  box2.display();
  box3.display();

  paper.display();
 
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.applyForce( paper.body,paper.body.position,{x:85,y:-85})
   }
}



