let ground;
let lander;
var lander_img;
var bg_img;
var fuel = 100;

var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW && fuel > 0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==RIGHT_ARROW  && fuel > 0)
  {
    right_thrust();
    lander.changeAnimation('thrusting');
    
    
  }

  if(keyCode==LEFT_ARROW  && fuel > 0)
  {
    left_thrust();
    lander.changeAnimation('thrusting');
    
    
  }
}

function upward_thrust()
{
  vy = -1;
  fuel = fuel-1;
}

function right_thrust()
{
  vx = vx+0.2;
  fuel = fuel-1;
}

function left_thrust()
{
  vx = vx-0.2;
  fuel = fuel-1;
}

function stop(){
  fuel = 0;
  vx = 0;
  vy = 0; 
  g = 0;
}