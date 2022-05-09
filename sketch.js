const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var ground, right, left, up;

var gh, pacMan;


function preload(){
 //gh = loadAnimation("./assets/Pacman.png","./assets/Pacman2.png");

 gh = loadImage("./assets/Pacman.png")
}


function setup() {
  createCanvas(700,700)
  engine = Engine.create();
  world = engine.world;
 
  ground = createSprite(350,690,700,10);
  ground.shapeColor = "blue";
  
  right = createSprite(690,350,10,700);
  right.shapeColor = "blue";

  left = createSprite(10,350,10,700);
  left.shapeColor = "blue";

  up = createSprite(350,10,700,10);
  up.shapeColor = "blue";
  
  pacMan = createSprite(350,350,10,10);
  pacMan.addImage("Ghost Hunter", gh);
  pacMan.scale = 0.05;
  
}


function draw() 
{
  background("black");
  Engine.update(engine);

  if(keyIsDown(LEFT_ARROW)){
   // console.log("I am inside if")
    pacMan.x -= 10
  }

  if(keyIsDown(RIGHT_ARROW)){
    pacMan.x += 10
  }

  if(keyIsDown(UP_ARROW)){
    pacMan.y -= 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    pacMan.y += 10;
  }
  
  drawSprites()
}