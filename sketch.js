function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("add image urls here")
  drink = loadAnimation("add image urls here");
  move = loadAnimation("add image urls here");
}



function setup() {
  createCanvas(400, 400);
 astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping", sleep);
 astronaut.scale = 0.1;
}

function draw() {
  background(220);
}